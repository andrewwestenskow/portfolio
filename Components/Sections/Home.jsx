import React from 'react'
import '../../styles/Home.scss'
import Typing from 'react-typing-animation'

const AnimatedTypingComponent = () => (
  <Typing startDelay={1000}>
    <span className='intro'>Movie lover</span>
    <Typing.Delay ms={1500} />
    <Typing.Backspace count={20} />
    <span className='intro'>Video gamer</span>
    <Typing.Delay ms={1500} />
    <Typing.Backspace count={20} />
    <span className='intro'>Drummer</span>
    <Typing.Delay ms={1500} />
    <Typing.Backspace count={20} />
    <span className='intro'>Web Developer</span>
    <Typing.Delay ms={10000000} />
  </Typing>
);

const Home = () => {
  return (
    <div className='Home'>
      <h1 className="section-label">
        Home
      </h1>
      <div className="home-content">
        <h1 className="name">My name is Andrew Westenskow</h1>
        <div className="intro-hold">
          <h2 className='intro'>I am a </h2>   
          <AnimatedTypingComponent />
        </div>
      </div>
    </div>
  )
}

export default Home