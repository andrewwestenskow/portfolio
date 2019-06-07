import React from 'react'
import '../../styles/Home.scss'
import Typing from 'react-typing-animation'

const AnimatedTypingComponent = () => (
  <Typing startDelay={1000}>
    <span className='intro'>movie lover</span>
    <Typing.Delay ms={1500} />
    <Typing.Backspace count={20} />
    <span className='intro'>video gamer</span>
    <Typing.Delay ms={1500} />
    <Typing.Backspace count={20} />
    <span className='intro'>drummer</span>
    <Typing.Delay ms={1500} />
    <Typing.Backspace count={20} />
    <span className='intro' style={{textDecoration: 'underline'}}>web developer</span>
    <Typing.Delay ms={100000000}/>
  </Typing>
);

const Home = () => {
  return (
    <div className='Home'>
      <h1 className="section-label">
        Home
      </h1>
      <div className="home-content">
        <div className="intro-hold">
        <h1 className="name">My name is <br/> Andrew Westenskow</h1>
          <div className='titles-hold'><h2 className='intro-head'>I am a</h2>
          <AnimatedTypingComponent /></div>
        </div>
        <div className="photo-hold">
        </div>
      </div>
    </div>
  )
}

export default Home