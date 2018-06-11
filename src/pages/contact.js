import React, {Component} from 'react'
import Link from 'gatsby-link'

import styles from './styles/about.module.css';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className={`col-11 offset-0 ${styles.Banner}`}>
              <h1>Creative studio specializing in machine learning<span>.</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default AboutPage
