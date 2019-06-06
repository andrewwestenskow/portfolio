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
          <img src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/13886475_10205130892150579_8267810955602109840_n.jpg?_nc_cat=100&_nc_oc=AQn1CwPNK4yazxRG5Ma6tbp92ExikuA0mVjvh5Lm_hKMzzivLM6wwZ94MGkfu5mOJMI&_nc_ht=scontent-lax3-1.xx&oh=e6e82d89e35b953b3b758711b2ebcddd&oe=5D9E4203" alt="Andrew Westenskow" className='profile-img'/>
        </div>
      </div>
    </div>
  )
}

export default Home