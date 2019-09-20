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
          <img className='carousel-image' src="https://i.imgur.com/QmtSXXq.png" alt="" />
          <p className='game-descriptions'>Minesweeper clone built using vanilla Javascript, HTML, and CSS</p>
          <p className='game-descriptions'>Click <Link href='/minesweeper'>
            here
          </Link> to play.*</p>
        </div>
        <div className="portfolio-item">
          <Link href='/spaceinvaders'>
            <h2 className="portfolio-item-title game-link">Space Invaders</h2>
          </Link>
          <img className='carousel-image' src="https://i.imgur.com/kKfXrhp.png" alt="" />
          <p className='game-descriptions'>Space Invaders clone built using vanilla Javascript, HTML, and CSS</p>
          <p className='game-descriptions'>Click <Link href='/spaceinvaders'>
            here
          </Link> to play.*</p>
        </div>
      </div>
      <p className='disclaimer'>*Games only work on desktop</p>
    </div>
  )
}
export default Games
