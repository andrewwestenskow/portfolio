import React from 'react'
import '../../styles/Portfolio.scss'
import Carousel from 'nuka-carousel'

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="portfolio-content">
        <div className="portfolio-item">
          <h2 className="portfolio-item-title">vote2play</h2>
          <Carousel
            width="80%"
            autoplay={true}
            autoplayInterval={5000}
            swiping={true}
            withoutControls={true}
            pauseOnHover={true}
            wrapAround={true}
            heightMode="first"
            speed={1500}
          >
            <div className="carousel-item">
              <img
                className="carousel-image"
                src="https://i.imgur.com/bzxiXUG.jpg"
                alt="vote2play home page"
              />
              <p className="carousel-image-label">vote2play home page</p>
            </div>
            <div className="carousel-item">
              <img
                className="carousel-image"
                src="https://i.imgur.com/QlZvoUf.jpg"
                alt="vote2play dashboard"
              />
              <p className="carousel-image-label">
                User dashboard shows all groups and allows for joining new
                groups
              </p>
            </div>
            <div className="carousel-item">
              <img
                className="carousel-image"
                src="https://i.imgur.com/6G0sbHS.jpg"
                alt="vote2play group"
              />
              <p className="carousel-image-label">
                Host view plays media and shows additional controls
              </p>
            </div>
            <div className="carousel-item">
              <img
                className="carousel-image"
                src="https://i.imgur.com/PFwmFGp.jpg"
                alt="vote2play group"
              />
              <p className="carousel-image-label">
                Member view shows what is playing and allows for voting and
                tuning in
              </p>
            </div>
            {/* <div className="carousel-item">
              <img className='carousel-image' src="https://socialplaylists.s3-us-west-1.amazonaws.com/Website+images/vote2play+create+group.png" alt="vote2play create groups"/>
              <p className='carousel-image-label'>Users can easily create new groups</p>
            </div> */}
            <div className="carousel-item">
              <img
                className="carousel-image"
                src="https://i.imgur.com/h5MsRkc.jpg"
                alt="vote2play profile"
              />
              <p className="carousel-image-label">
                Profile page allows users to edit their information and leave
                any unused groups
              </p>
            </div>
          </Carousel>
          <ul className="portfolio-item-list">
            <li>
              vote2play is a platform for collaborative playlist making and
              music listening
            </li>
            <li>
              Playlists are made from YouTube links and can be added by
              listeners and voted on to determine the order they will play
            </li>
            <li>
              By default, music only plays on host device but other members can
              tune in on their own devices
            </li>
            <li>
              Music will always sync with the host device including pause, play,
              and seek functionality
            </li>
            <li>
              Built using: React.js, Express, Socket.io, PostgreSQL, and
              Google's YouTube API
            </li>
            <li>
              Live site:{' '}
              <a target="_blank" href="http://www.vote2play.com">
                www.vote2play.com
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/andrewwestenskow/vote2play"
              >
                GitHub repo{' '}
              </a>
            </li>
          </ul>
        </div>
        <div className="portfolio-item">
          <h2 className="portfolio-item-title">Carve</h2>
          <Carousel
            width="80%"
            autoplay={true}
            autoplayInterval={10000}
            swiping={true}
            withoutControls={true}
            pauseOnHover={true}
            wrapAround={true}
            heightMode="first"
            speed={1500}
          >
            <div className="carousel-item">
              <img
                className="carousel-image"
                src="https://i.imgur.com/fgGZhOU.png"
              />
              <p className="carousel-image-label">Carve Dashboard</p>
            </div>
            <div className="carousel-item">
              <img
                className="carousel-image"
                src="https://i.imgur.com/E0ejIQz.png"
              />
              <p className="carousel-image-label">Spotify Library</p>
            </div>
            <div className="carousel-item">
              <img
                className="carousel-image"
                src="https://i.imgur.com/TUCyp6T.png"
                alt="vote2play create group"
              />
              <p className="carousel-image-label">Artist view</p>
            </div>
            <div className="carousel-item">
              <img
                className="carousel-image"
                src="https://i.imgur.com/4SJANVh.png"
              />
              <p className="carousel-image-label">Album view</p>
            </div>
            <div className="carousel-item">
              <img
                className="carousel-image"
                src="https://i.imgur.com/9RvmkSc.png"
              />
              <p className="carousel-image-label">Playlist view</p>
            </div>
          </Carousel>
          <ul className="portfolio-item-list">
            <li>
              Carve is a custom Spotify player designed for simplicity and ease
              of use.
            </li>
            <li>Contains all basic Spotify functionality.</li>
            <li>
              Users can play music, add and remove albums or artists from
              library, and search for new music.
            </li>
            <li>
              Built using: React.js with only functional components and hooks,
              Express, Spotify Web Playback SDK, Spotify Web API
            </li>
            <li>
              Live site:{' '}
              <a target="_blank" href="http://www.carve.westenskow.dev">
                carve.westenskow.dev
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/andrewwestenskow/slack-spotify"
              >
                GitHub repo{' '}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
