import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../src/assets/Lotties/410-lego-loader.json'


const Loading = (props) => {

  const style = {
    width: '100vw',
    height: '100vh',
    background: 'black',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }

  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div style={style} className="Loading">
      <h1 style={{color: 'white', fontSize: '3rem'}}>Getting that ready</h1>
      <Lottie width={props.width} height={props.height} options={options} />
    </div>
  )

}
export default Loading
