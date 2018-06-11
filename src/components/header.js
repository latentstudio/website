import React, {Component} from 'react'
import Link from 'gatsby-link'

import logo from './../images/logo.png';
import styles from './styles/header.module.css';

class Header extends Component {

  render() {
    return (
      <header className={`container-fluid ${styles.Header}`}>
        <div className="row">
          <div className={`col-2 offset-1 ${styles.Logo}`}>
            <Link to="/">
              {/*<img src={logo} alt="Latent Studio"/>*/}
              <h3>Latent Studio</h3>
            </Link>
          </div>

          <div className={`col-2 ${styles.Menu}`}>
            <ul>
              <Link to='/about'><li>About</li></Link>
              <Link to='/contact'><li>Contact</li></Link>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
