import React, { Component } from 'react'
import '../../styles/ContactForm.scss'

class ContactForm extends Component {

  state = {
    from: '',
    subject: '',
    body: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    
  }

  render() {
    return (
      <div >
        <div className='contact-form'>
          <p>Your email</p>
          <input
            onChange={(e) => this.handleChange(e)}
            name='from' type="text"
            required />
          <p>Subject</p>
          <input
            onChange={(e) => this.handleChange(e)}
            name='subject'
            type="text"
            required />
          <textarea
            onChange={(e) => this.handleChange(e)}
            name="body"
            id="" cols="30" rows="10"
            required></textarea>
          <button onClick={this.handleSubmit} type='submit'>Send</button>
        </div>
      </div>
    )
  }
}

export default ContactForm