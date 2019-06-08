import React from 'react'
import '../styles/Layout.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faLayerGroup, faDesktop, faEnvelopeOpenText, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Layout = props => {

  library.add(faHome, faUser, faLayerGroup, faDesktop, faEnvelopeOpenText, faEnvelope, faPhone, fab)

  return (
    <div className='Layout'>
      <div className="navbar">
        <nav className='nav'>
          <Link href='#home'>
            <div className='nav-label-hold'>
              <span className='nav-label'>Home</span>
              <div className="icon-hold">
                <FontAwesomeIcon id='home-icon' className='nav-icon' icon='home' />
              </div>
            </div>
          </Link>
          <Link href='#about'>
            <div className='nav-label-hold'>
              <span className='nav-label'>About</span>
              <div className="icon-hold">
                <FontAwesomeIcon className='nav-icon' icon='user' />
              </div>
            </div>
          </Link>
          <Link href='#stack'>
            <div className='nav-label-hold'>
              <span className='nav-label'>Stack</span>
              <div className="icon-hold">
                <FontAwesomeIcon className='nav-icon' icon='layer-group' />
              </div>
            </div>
          </Link>
          <Link href='#portfolio'>
            <div className='nav-label-hold'>
              <span className='nav-label'>Portfolio</span>
              <div className="icon-hold">
                <FontAwesomeIcon className='nav-icon' icon='desktop' />
              </div>
            </div>
          </Link>
          <Link href='#contact'>
            <div className='nav-label-hold'>
              <span className='nav-label'>Contact</span>
              <div className="icon-hold">
                <FontAwesomeIcon className='nav-icon' icon='envelope-open-text' />
              </div>
            </div>
          </Link>
        </nav>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default Layout