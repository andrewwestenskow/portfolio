import React from 'react'
import '../styles/Layout.scss'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faLayerGroup, faDesktop, faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons'

const Layout = props => {

  library.add(faHome, faUser, faLayerGroup, faDesktop, faEnvelopeOpenText)

  return(
    <div className='Layout'>
      <div className="navbar">
        <nav className='nav'>
          <FontAwesomeIcon icon='home'/>
          <FontAwesomeIcon icon='user'/>
          <FontAwesomeIcon icon='layer-group'/>
          <FontAwesomeIcon icon='desktop'/>
          <FontAwesomeIcon icon='envelope-open-text'/>
        </nav>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default Layout