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

        <div className="contact-content-hold">
          <div className="contact-info">
            <div className="contact-info-line">
              <FontAwesomeIcon className='contact-info-icon' icon='envelope' />
              <a
                href="mailto:andrew.westenskow@gmail.com?subject=Let's chat!"
                target='_blank'
                className="contact-info-text">andrew.westenskow@gmail.com</a>
            </div>
            <div className="contact-info-line">
              <FontAwesomeIcon className='contact-info-icon' icon='phone' />
              <a href='tel:385-290-8656' className="contact-info-text">(385) 290-8656</a>
            </div>
            <div className="contact-info-line">
              <FontAwesomeIcon className='contact-info-icon' icon={['fab', 'linkedin-in']} />
              <a className="contact-info-text" href='https://www.linkedin.com/in/andrew-westenskow/' target='_blank'>https://www.linkedin.com/in/andrew-westenskow/</a>
            </div>
            <div className="contact-info-line">
              <FontAwesomeIcon className='contact-info-icon'
                icon={['fab', 'github']} />
              <a className="contact-info-text" href='https://github.com/andrewwestenskow'>https://github.com/andrewwestenskow</a>
            </div>
          </div>
          <div className="contact-form-hold">
          {/* <ContactForm /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact