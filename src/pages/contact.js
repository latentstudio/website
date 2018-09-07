import React, {Component} from 'react'
import Link from 'gatsby-link'

import styles from './styles/contact.module.css';
import img from './../pages/projects/uncannyroad/03.jpg';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className={`col-11 offset-0 ${styles.Main}`}>
              <h1>Contact Us</h1>
              <div className={styles.HorizontalLine}></div>
              <img src={img} alt="uncannry road"/>
              <p>info@latentstudio.com</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default AboutPage
