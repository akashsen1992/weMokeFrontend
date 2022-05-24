import React from 'react'
import { Link } from 'react-router-dom'

import IcLogo from '../images/brand-logo.svg'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='header-flex'>
              <Link to={'/'}><img src={ IcLogo } /></Link>
              <ul className='header-links'>
                <li><Link to='/history'>History</Link></li>
                <li><Link to='contact' >Contact</Link></li>
                <li><Link to='faq' >FAQs</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header