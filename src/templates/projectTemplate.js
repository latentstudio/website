import React from "react";

import styles from './project.module.css';

export default function Template({ data, }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  console.log('frontmatter', frontmatter);

  return <div className={styles.ProjectContainer}>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-12 ${styles.MainImage}`}>
            <img src={frontmatter.mainImage.publicURL} alt={frontmatter.title} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className={`col-8 ${styles.Title}`}>
            <h1>{frontmatter.title}</h1>
            <div className={styles.HorizontalLine}></div>
          </div>
        </div>
        
        <div className="row">
          <div className={`col-10 ${styles.Description}`}>
            <p dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>

      <div className="row">
        {frontmatter.links.length > 0 && <div className={`col-10 ${styles.Links}`}>
          Links:{frontmatter.links.map(({ name, url }) => <a href={url}>
            <button>{name}</button>
          </a>)}
        </div>}
      </div>


      </div>

      
    </div>
}

export const pageQuery = graphql`
  query ProjectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        mainImage {
          publicURL
        }
        links {
          name
          url
        }
      }
    }
  }
`;