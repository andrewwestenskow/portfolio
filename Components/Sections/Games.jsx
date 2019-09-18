import React from 'react'
import '../../styles/Games.scss'
import Link from 'next/link'


const Games = (props) => {
  return (
    <div className='Games'>
      <div className="portfolio-content">
        <div className="portfolio-item">
          <Link href='/minesweeper'>
            <h2 className='portfolio-item-title'>Minesweeper</h2>
          </Link>
          <img className='carousel-image' src="https://i.imgur.com/QmtSXXq.png" alt=""/>
        </div>
        <div className="portfolio-item">
          <Link href='/spaceinvaders'>
            <h2 className="portfolio-item-title">Space Invaders</h2>
          </Link>
          <img className='carousel-image' src="https://i.imgur.com/kKfXrhp.png" alt=""/>
        </div>
      </div>
    </div>
  )
}
export default Games
