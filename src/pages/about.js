import React, {Component} from 'react'
import Link from 'gatsby-link'

import styles from './styles/about.module.css';

import cris from './../images/cris.jpg';
import anastasis from './../images/anastasis.jpg';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className={`col-11 offset-0 ${styles.Main}`}>
              <h1>Latent is a creative studio specializing in machine learning<span>.</span></h1>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className={`col-11 offset-1`}>
              <div className={styles.VerticalLine}></div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className={`col-8 offset-1 ${styles.Second}`}>
              <h1>Building creative projects exploring novel ways of using machine learning.</h1>
              <h1>Creating artistic research using deep learning and neural networks.</h1>
              <h1>Developing tools to allow artists and designers to experiment with machine learing.</h1>
              <h1>Exploring the latent spaces of creative uses artificial intelligence.</h1>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className={`col-4 offset-2 ${styles.Who}`}>
              <h2>Who</h2>
              <div className={styles.HorizontalLine}></div>
            </div>
          </div>

          <div className='row'>
            <div className={`col offset-1 ${styles.Who}`}>
              <img src={anastasis} alt="Anastasis Germanidis"/>
              <h4>Anastasis Germanidis</h4>
              <p>Anastasis Germanidis is an artist and engineer. His projects explore the effects of new communications technologies and artificial intelligence systems on personal identity and social interaction. His artwork has been shown internationally across the US and Europe, including at Ars Electronica Export, Cannes NEXT, and CPH:DOX, and featured in The Telegraph, WIRED, NRC Handelsblad, The Irish Independent, and Mashable, among other places. His recent project Antipersona was one of Wired UK's Best Apps of 2016. He's happiest when he works in public and hopes to one day have every part of his behavior and personality be generated by computer programs that he's written.</p>
            </div>
            <div className={`col ${styles.Who}`}>
              <img src={cris} alt="Cristóbal Valenzuela"/>
              <h4>Cristóbal Valenzuela</h4>
              <p>Cristóbal Valenzuela is a technologist, artist and software developer interested in the intersection between machine learning and creative tools. He is a researcher at New York University and author and director of <a href="https://runwayml.com">RunwayML</a>. He also contributes to OSS and helps maintain <a href="https://ml5js.org/">ml5.js</a>. His work has been sponsored by Google and the Processing Foundation and his projects has been exhibited in Latin America and the US,including the Santiago Museum of Contemporary Art, GAM, Fundación Telefonica, Lollapalooza, NYC Media Lab, New Latin Wave, Inter-American Development Bank, Stanford University and New York University.</p>
            </div>
          </div>         
        </div>
      </div>
    )
  }
}
export default AboutPage
