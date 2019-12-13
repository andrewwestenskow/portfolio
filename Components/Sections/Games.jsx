import React from 'react'
import '../../styles/Games.scss'
import Link from 'next/link'

const Games = props => {
  return (
    <div className="Games">
      <div className="games-content">
        <div className="portfolio-item">
          <h2 className="portfolio-item-title game-link">Minesweeper</h2>
          <img
            className="carousel-image"
            src="https://i.imgur.com/QmtSXXq.png"
            alt=""
          />
          <p className="game-descriptions">
            Minesweeper clone built using vanilla Javascript, HTML, and CSS
          </p>
          <p className="game-descriptions">
            Click <Link href="/minesweeper">here</Link> to play.*
          </p>
        </div>
        <div className="portfolio-item">
          <h2 className="portfolio-item-title game-link">Space Invaders</h2>
          <img
            className="carousel-image"
            src="https://i.imgur.com/kKfXrhp.png"
            alt=""
          />
          <p className="game-descriptions">
            Space Invaders clone built using vanilla Javascript, HTML, and CSS
          </p>
          <p className="game-descriptions">
            Click <Link href="/spaceinvaders">here</Link> to play.*
          </p>
        </div>
        <div className="portfolio-item">
          <h2 className="portfolio-item-title game-link">31 Days of October</h2>

          <img
            className="carousel-image"
            src="https://i.imgur.com/5h8dhki.png"
            alt=""
          />
          <p className="game-descriptions">
            Static site built using Next.js for a month long horror film
            festival
          </p>
          <p className="game-descriptions">
            Click{' '}
            <a target="_blank" href="https://www.31daysofoctober.com">
              here
            </a>{' '}
            to explore.
          </p>
        </div>
      </div>
      <p className="disclaimer">*Games only work on desktop</p>
    </div>
  )
}
export default Games
