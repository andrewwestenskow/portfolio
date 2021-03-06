import React from 'react'
import '../../styles/Stack.scss'
import StackImg from './StackImg'
import HTML from '../../src/assets/HTML.png'
import CSS from '../../src/assets/CSS.png'
import JAVASCRIPT from '../../src/assets/JAVASCRIPT.png'
import MONGO from '../../src/assets/MONGO.png'
import NEXT from '../../src/assets/NEXT.png'
import NODE from '../../src/assets/NODE.png'
import POSTGRES from '../../src/assets/POSTGRES.png'
import REACT from '../../src/assets/REACT.png'
import SASS from '../../src/assets/SASS.png'
import GIT from '../../src/assets/GIT.png'
import REDIS from '../../src/assets/REDIS.png'
import PYTHON from '../../src/assets/PYTHON.png'
import TYPESCRIPT from '../../src/assets/TYPESCRIPT.png'

const Stack = () => {
  return (
    <div className="Stack">
      <h1 className="section-label">Stack</h1>
      <div className="stack-content">
        <StackImg img={HTML} name="HTML5" />
        <StackImg img={CSS} name="CSS3" />
        <StackImg img={SASS} name="Sass" />
        <StackImg img={JAVASCRIPT} name="Javascript" />
        <StackImg img={TYPESCRIPT} name="Typescript" />
        <StackImg img={REACT} name="React.js" />
        <StackImg img={NEXT} name="Next.js" />
        <StackImg img={NODE} name="Node.js" />
        <StackImg img={PYTHON} name="Python" />
        <StackImg img={REACT} name="React Native" />
        <StackImg img={POSTGRES} name="PostgreSQL" />
        <StackImg img={MONGO} name="MongoDB" />
        <StackImg img={REDIS} name="Redis" />
        <StackImg img={GIT} name="Git" />
      </div>
    </div>
  )
}

export default Stack
