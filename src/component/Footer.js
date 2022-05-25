import React from 'react'
import { Link } from 'react-router-dom'

import IcFacebook from '../images/ic-facebook.svg'
import IcInstagram from '../images/ic-instagram.svg'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-4 col-sm-12'>
            <h4>Menu</h4>
            <Link to='/history'>History</Link>
            <Link to='/contact' >Contact</Link>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-12'>
            <h4>WeMoke</h4>
            <Link to='faq' >FAQs</Link>
            <Link to=''>COVID-19</Link>
          </div>
          <div className='ml-auto'>
            <h4>Social</h4>
            <ul className='socialmedia'>
              <li><a href=''><img src={ IcFacebook } /></a></li>
              <li><a href=''><img src={ IcInstagram } /></a></li>
            </ul>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12 text-center'>
            <p>© 2022 All Rights Reserved by WeMoke LLC`</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Footer