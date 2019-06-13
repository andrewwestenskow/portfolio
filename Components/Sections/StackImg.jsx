import React from 'react'
import '../../styles/StackImg.scss'

const StackImg = (props) => {

  return(
    <div className='stack-img'>
      <div className="stack-image-hold">
        <img className='stack-image' src={props.img} alt={props.name}/>
      </div>

      <div className="stack-name-hold">
        <p className='stack-name'>{props.name}</p>
      </div>
    </div>
  )
}

export default StackImg