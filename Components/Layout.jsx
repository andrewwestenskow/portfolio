import React from 'react'
import '../styles/Layout.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faLayerGroup, faDesktop, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

const Layout = props => {

  library.add(faHome, faUser, faLayerGroup, faDesktop, faEnvelopeOpenText)

  return (
    <div className='Layout'>
      <div className="navbar">
        <nav className='nav'>
          <div className='nav-label-hold'>
            <span className='nav-label'>Home</span>
            <div className="icon-hold">
              <FontAwesomeIcon className='nav-icon' icon='home' />
            </div>
          </div>
          <div className='nav-label-hold'>
            <span className='nav-label'>About</span>
            <div className="icon-hold">
              <FontAwesomeIcon className='nav-icon' icon='user' />
            </div>
          </div>
          <div className='nav-label-hold'>
            <span className='nav-label'>Stack</span>
            <div className="icon-hold">
              <FontAwesomeIcon className='nav-icon' icon='layer-group' />
            </div>
          </div>
          <div className='nav-label-hold'>
            <span className='nav-label'>Portfolio</span>
            <div className="icon-hold">
              <FontAwesomeIcon className='nav-icon' icon='desktop' />
            </div>
          </div>
          <div className='nav-label-hold'>
            <span className='nav-label'>Contact</span>
            <div className="icon-hold">
              <FontAwesomeIcon className='nav-icon' icon='envelope-open-text' />
            </div>
          </div>
        </nav>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default Layout