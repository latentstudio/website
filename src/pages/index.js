import React, {Component} from 'react'
import Link from 'gatsby-link'

import styles from './styles/home.module.css';
import line from './../images/line.jpg';

class IndexPage extends Component {
  render() {
    const {data} = this.props;
    const projects = data.allMarkdownRemark.edges;

    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className={`col-11 offset-0 ${styles.Banner}`}>
              <h1>Creative studio specializing in machine learning<span>.</span></h1>
            </div>
            
          </div>

          <div className='row'>
            <div className={`offset-2 ${styles.Subtitle}`}>              
            </div>
          </div>
        </div>   
        
        <div className='container-fluid'>
          {projects.map(({node}, i) => (
            <div key={node.id} className={`row ${styles.Project}`} style={ { background: `rgb(${250 - (i*10)}, ${250 - (i*10)}, ${250 - (i*10)})` } }>
              <div className={`col-12 col-md-4 ${styles.ProjectDescription}`}>
                <h3>
                  {node.frontmatter.title}
                </h3>
                <div className={styles.HorizontalLine}></div>
                <p>
                  {node.frontmatter.description}
                </p>
                <Link to={node.frontmatter.path}><button>View Project</button></Link>
              </div>
              <div className={`col-12 col-md-8  ${styles.ProjectImage}`}>
                <img src={node.frontmatter.thumbnail.publicURL} />
              </div>
            </div>
          ))}
        </div>
 
      
      </div>

    )
  }
}
export default IndexPage

export const query = graphql `
  query IndexQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            thumbnail {
              publicURL
            }
            path
          }
          excerpt
        }
      }
    }
  }
`;
