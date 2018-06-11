import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header';
import Footer from '../components/footer';

import './reset.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import favicon from './../images/favicon.png';

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content="Latent studio is a creative studio specializing in machine learning." />
      <meta name="keywords" content="Building creative projects exploring novel ways of using machine learning." />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon} />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>
      {children()}
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
