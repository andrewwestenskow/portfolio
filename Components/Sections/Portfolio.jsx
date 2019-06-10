import React from 'react'
import '../../styles/Portfolio.scss'
import Carousel from 'nuka-carousel'


const Portfolio = () => {
  return (
    <div className='Portfolio'>
      <h1 className="section-label">
        Portfolio
      </h1>
      <div className="portfolio-content">
        <div className="portfolio-item">
          <h2 className='portfolio-item-title'>vote2play</h2>
          <Carousel width='80%' autoplay='true' autoplayInterval='5000' swiping='true' withoutControls='true' pauseOnHover='true' wrapAround='true' heightMode='first' speed='1500'>
            <div className="carousel-item">
              <img className='carousel-image' src="https://socialplaylists.s3-us-west-1.amazonaws.com/Hero+Images/groups+example.PNG" alt="vote2play groups"/>
              <p className='carousel-image-label'>User dashboard displays all groups</p>
            </div>
            <div className="carousel-item">
              <img className='carousel-image' src="https://socialplaylists.s3-us-west-1.amazonaws.com/Hero+Images/Playlist+example.PNG" alt="vote2play playlist"/>
              <p className='carousel-image-label'>Playlist displays now playing and upcoming songs</p>
            </div>
            <div className="carousel-item">
              <img className='carousel-image' src="https://socialplaylists.s3-us-west-1.amazonaws.com/Hero+Images/create+group+example.PNG" alt="vote2play create group"/>
              <p className='carousel-image-label'>Users can create new groups</p>
            </div>
          </Carousel>
          <ul className="portfolio-item-list">
            <li>vote2play is a platform for collaborative playlist making and music listening</li>
            <li>Playlists are made from YouTube links and can be added by listeners and voted on to determine the order they will play</li>
            <li>By default, music only plays on host device but other members can tune in on their own devices</li>
            <li>Music will always sync with the host device including pause, play, and seek functionality</li>
            <li>Built using: React.js, Express, Socket.io, PostgreSQL, and Google's YouTube API</li>
            <li>Live site: <a target='_blank' href="http://www.vote2play.com">www.vote2play.com</a></li>
            <li><a target='_blank' href="https://socialplaylists.s3-us-west-1.amazonaws.com/Hero+Images/create+group+example.PNG">GitHub repo </a></li>
          </ul>
        </div>
        <div className="portfolio-item">
          <h2 className="portfolio-item-title">fin-s</h2>
        </div>
      </div>
    </div>
  )
}

export default Portfolio