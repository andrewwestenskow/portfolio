import React from 'react'
import '../../styles/Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='Contact'>
      <h1 className="section-label">
        Contact
      </h1>

      <div className="contact-page">
        <div className="lets-chat">
          <h1>Let's chat!</h1>
        </div>

        <div className="contact-info">
          <div className="contact-info-line">
            <a
              href="mailto:andrew.westenskow@gmail.com?subject=Let's chat!"
              target='_blank'
              className="contact-info-text">
              <FontAwesomeIcon className='contact-info-icon' icon='envelope' />
              andrew.westenskow@gmail.com
                </a>
          </div>
          <div className="contact-info-line">
            <a href='tel:385-290-8656' className="contact-info-text">
              <FontAwesomeIcon className='contact-info-icon' icon='phone' />
              (385) 290-8656
              </a>
          </div>
          <div className="contact-info-line">
            <a className="contact-info-text" href='https://www.linkedin.com/in/andrew-westenskow/' target='_blank'>
              <FontAwesomeIcon className='contact-info-icon' icon={['fab', 'linkedin-in']} />
              https://www.linkedin.com/in/andrew-westenskow/
              </a>
          </div>
          <div className="contact-info-line">
            <a target="_blank" className="contact-info-text" href='https://github.com/andrewwestenskow'>
              <FontAwesomeIcon className='contact-info-icon'
                icon={['fab', 'github']} />
              https://github.com/andrewwestenskow</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact