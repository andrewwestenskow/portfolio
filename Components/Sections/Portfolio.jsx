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
          <Carousel>
            <img src="https://socialplaylists.s3-us-west-1.amazonaws.com/Hero+Images/groups+example.PNG" alt="vote2play groups"/>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
          </Carousel>
        </div>
        <div className="portfolio-item">
          <h2 className="portfolio-item-title">fin-s</h2>
        </div>
      </div>
    </div>
  )
}

export default Portfolio