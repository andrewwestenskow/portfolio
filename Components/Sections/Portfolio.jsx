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
                src="https://media-exp1.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=axXkYnru%2FRsTFyGE4%2FI2swPzz%2BA%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjoecPWe-eg8EATcSRQjQBkfu61EmbmG47ueYvqKIojjJOzLZP5agYUbhl4lWdI"
                alt="vote2play home page"
              />
              <p className="carousel-image-label">vote2play home page</p>
            </div>
            <div className="carousel-item">
              <img
                className="carousel-image"
                src="https://media-exp1.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=TTztfjD3q%2FBXqDru9n2niPqemyw%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjpeMGJf-b3rUAfLSxQjQBgeLm1ETjpE46-Ktm6eo1xgpTld5b5agYUbhl4lWdI"
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
                src="https://media-exp1.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=rf7b99%2BqTIWsw3%2B28bJ7nW7sRSs%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjvL8HXf7uk90BFK3gFjQA2e-21ETPkFI7tf469et4kjZe3IcP5agYUbhl4lWdI"
                alt="vote2play group"
              />
              <p className="carousel-image-label">
                Host view plays media and shows additional controls
              </p>
            </div>
            <div className="carousel-item">
              <img
                className="carousel-image"
                src="https://media-exp1.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=J3bMulaLJ7xzGB7NDuL94CBIYhE%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjteZLce-OgrUBELX4AjQA0fLm1SDjmFI6-fo25e4p5jJKwJpX5agYUbhl4lWdI"
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
                src="https://media-exp1.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=IXw94lAotzvDZWkqD3moyW44mNc%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjvccTdeeHzpUAXcCsGjQBkeOu1SWXkFo69f4zvdNR5icbtIZP5agYUbhl4lWdI"
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
          <h2 className="portfolio-item-title">fin-s</h2>
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
                src="https://media-exp1.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=zGFxHTHEqMenuYcpHsb13%2BPOczU%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjpe8XecOPzo0ASfysHjQBnLbu1EmWzFY69etznLtUijMXldcH5agYUbhl4lWdI"
              />
              <p className="carousel-image-label">fin-s home page</p>
            </div>
            <div className="carousel-item">
              <img
                className="carousel-image"
                src="https://media-exp1.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=5u%2FzRZrAzoCtaa7hJiZMexX4xXE%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjgeMDfeLv1oEBEfiVQjQBjeui1EmXjEI6_Ko7oKIkj2p60cJT5agYUbhl4lWdI"
              />
              <p className="carousel-image-label">
                The wizard allows users to quickly add incomes, debts, and
                expenses
              </p>
            </div>
            <div className="carousel-item">
              <img
                className="carousel-image"
                src="https://media-exp1.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=PVfS6W5RQms%2BXHe%2FZSbXiiBxsvc%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjuccKJK7ekp0AWLCoEjQAxfOy1SGS3RI7qeN6-KI0gip7gIpP5agYUbhl4lWdI"
                alt="vote2play create group"
              />
              <p className="carousel-image-label">
                The dashboard shows graph, calendar, and upcoming events
              </p>
            </div>
            <div className="carousel-item">
              <img
                className="carousel-image"
                src="https://media-exp1.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=2mEXudE2jHKLIvcdgyEIvxMZMtw%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjof5PZfraipUAVKS4DjQBmf-u1ETi0EI69LoK9fd5zicKwIJX5agYUbhl4lWdI"
              />
              <p className="carousel-image-label">
                Profile allows users to quickly manage information
              </p>
            </div>
          </Carousel>
          <ul className="portfolio-item-list">
            <li>
              fin-s is a financial tracker specifically designed to help users
              eliminate debt
            </li>
            <li>
              Users incomes, debts, and expenses are input at sign-up and
              visualized in the dashboard
            </li>
            <li>
              The dashboard view shows both a list and calendar view of upcoming
              incomes, debts, and expenses as well as an interactive graph which
              visualizes debt payoff with higher payments
            </li>
            <li>
              The dashboard also provides a financial wellness to-do list
              designed to help users reach financial stability
            </li>
            <li>
              Built using: React.js, Express, PostgreSQL, MongoDB, Chart.js, and
              fullcalendar
            </li>
            <li>
              Live site:{' '}
              <a target="_blank" href="http://www.fin-s.us">
                www.fin-s.us
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/fin-s/fin-s">
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
