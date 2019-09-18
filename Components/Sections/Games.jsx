import React from 'react'
import '../../styles/Games.scss'
import Link from 'next/link'


const Games = (props) => {
  return (
    <div className='Games'>
      <div className="games-content">
        <div className="portfolio-item">
          <Link href='/minesweeper'>
            <h2 className='portfolio-item-title game-link'>Minesweeper</h2>
          </Link>
          <img className='carousel-image' src="https://i.imgur.com/QmtSXXq.png" alt=""/>
          <h3>Built using vanilla Javascript, HTML, and CSS</h3>
          <h3>Click on the name to play.  Only works on desktop.</h3>
        </div>
        <div className="portfolio-item">
          <Link href='/spaceinvaders'>
            <h2 className="portfolio-item-title game-link">Space Invaders</h2>
          </Link>
          <img className='carousel-image' src="https://i.imgur.com/kKfXrhp.png" alt=""/>
          <h3>Built using vanilla Javascript, HTML, and CSS</h3>
          <h3>Click on the name to play.  Only works on desktop.</h3>
        </div>
      </div>
    </div>
  )
}
export default Games
