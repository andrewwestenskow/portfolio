import React from 'react'
import '../../styles/Portfolio.scss'
import Carousel from 'nuka-carousel'


const Portfolio = () => {
  return (
    <div className='Portfolio'>
      <div className="portfolio-content">
        <div className="portfolio-item">
          <h2 className='portfolio-item-title'>vote2play</h2>
          <Carousel width='80%' autoplay={true} autoplayInterval={5000} swiping={true} withoutControls={true} pauseOnHover={true} wrapAround={true} heightMode='first' speed={1500}>
            <div className="carousel-item">
              <img className='carousel-image' src="https://socialplaylists.s3-us-west-1.amazonaws.com/Website+images/vote2play+home.png" alt="vote2play home page"/>
              <p className='carousel-image-label'>vote2play home page</p>
            </div>
            <div className="carousel-item">
              <img className='carousel-image' src="https://socialplaylists.s3-us-west-1.amazonaws.com/Website+images/vote2play+dashboard.png" alt="vote2play dashboard"/>
              <p className='carousel-image-label'>User dashboard shows all groups and allows for joining new groups</p>
            </div>
            <div className="carousel-item">
              <img className='carousel-image' src="https://socialplaylists.s3-us-west-1.amazonaws.com/Website+images/vote2play+group.png" alt="vote2play group"/>
              <p className='carousel-image-label'>Host view plays media and shows additional controls</p>
            </div>
            <div className="carousel-item">
              <img className='carousel-image' src="https://socialplaylists.s3-us-west-1.amazonaws.com/Website+images/vote2play+group+not+host.png" alt="vote2play group"/>
              <p className='carousel-image-label'>Member view shows what is playing and allows for voting and tuning in</p>
            </div>
            <div className="carousel-item">
              <img className='carousel-image' src="https://socialplaylists.s3-us-west-1.amazonaws.com/Website+images/vote2play+create+group.png" alt="vote2play create groups"/>
              <p className='carousel-image-label'>Users can easily create new groups</p>
            </div>
            <div className="carousel-item">
              <img className='carousel-image' src="https://socialplaylists.s3-us-west-1.amazonaws.com/Website+images/vote2play+profile.png" alt="vote2play profile"/>
              <p className='carousel-image-label'>Profile page allows users to edit their information and leave any unused groups</p>
            </div>
          </Carousel>
          <ul className="portfolio-item-list">
            <li>vote2play is a platform for collaborative playlist making and music listening</li>
            <li>Playlists are made from YouTube links and can be added by listeners and voted on to determine the order they will play</li>
            <li>By default, music only plays on host device but other members can tune in on their own devices</li>
            <li>Music will always sync with the host device including pause, play, and seek functionality</li>
            <li>Built using: React.js, Express, Socket.io, PostgreSQL, and Google's YouTube API</li>
            <li>Live site: <a target='_blank' href="http://www.vote2play.com">www.vote2play.com</a></li>
            <li><a target='_blank' href="https://github.com/andrewwestenskow/vote2play">GitHub repo </a></li>
          </ul>
        </div>
        <div className="portfolio-item">
          <h2 className="portfolio-item-title">fin-s</h2>
          <Carousel width='80%' autoplay={true} autoplayInterval={5000} swiping={true} withoutControls={true} pauseOnHover={true} wrapAround={true} heightMode='first' speed={1500}>
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
            <li>fin-s is a financial tracker specifically designed to help users eliminate debt</li>
            <li>Users incomes, debts, and expenses are input at sign-up and visualized in the dashboard</li>
            <li>The dashboard view shows both a list and calendar view of upcoming incomes, debts, and expenses as well as an interactive graph which visualizes debt payoff with higher payments</li>
            <li>The dashboard also provides a financial wellness to-do list designed to help users reach financial stability</li>
            <li>Built using: React.js, Express, PostgreSQL, MongoDB, Chart.js, and fullcalendar</li>
            <li>Live site: <a target='_blank' href="http://www.fin-s.us">www.fin-s.us</a></li>
            <li><a target='_blank' href="https://github.com/fin-s/fin-s">GitHub repo </a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Portfolio