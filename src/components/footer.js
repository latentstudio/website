import React, {Component} from 'react'
import Link from 'gatsby-link'

import styles from './styles/footer.module.css';

class Footer extends Component {

  render() {
    return (
      <footer className={`container-fluid ${styles.Footer}`}>
        <div className="row">
          <div className={`col ${styles.Menu}`}>
              <ul>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
              </ul>
            </div>

            <div className={`col ${styles.Address}`}>
              <p>Latent Studio is based in New York.</p>
            </div>
        </div>
      </footer>
    )
  }
}

export default Footer
