import React from 'react'
import '../../styles/About.scss'
import Link from 'next/link'

const About = () => {
  return (
    <div className='About'>
      <h1 className="section-label">
        About
      </h1>
      <div className="about-content">
        <div className="about-image-hold">
          <div className="about-image">
            <img src="https://socialplaylists.s3-us-west-1.amazonaws.com/Website+images/andrew+africa.jpg" alt="Andrew" className='image'/>
          </div>
        </div>
        <div className="about-text-hold">
          <h1>Hi, I'm Andrew...</h1>
          <article><p>Soon after graduating with Bachelor's degrees in Russian and International Studies, I realized that field was not where I would work for the rest of my life.  I spent a few years working in logistics but always felt the call of the tech community.  I finally decided to dive in and have loved every minute of my time as a developer.  I love finding solutions to complex problems, coming up with the most efficient way to do things, and  building effective and efficient apps.  When I'm not coding I love to play the drums and watch movies.  I even host a podcast discussing film!  If you have any questions please don't hesitate to <Link href='#contact'>
            get in touch!
          </Link></p></article>
        </div>
      </div>
    </div>
  )
}

export default About