import React from 'react'
import Layout from '../Components/Layout'
import '../styles/Index.scss'
import Home from '../Components/Sections/Home'
import About from '../Components/Sections/About'
import Stack from '../Components/Sections/Stack'
import Portfolio from '../Components/Sections/Portfolio'
import Contact from '../Components/Sections/Contact'

const Index = () => {

  return <>
  <Layout>
    <section id='home'>
      <Home/>
    </section>
    <section id='about'>
      <About/>
    </section>
    <section id='stack'>
      <Stack/>
    </section>
    <section id='portfolio'>
      <Portfolio/>
    </section>
    <section id='contact'>
      <Contact/>
    </section>
  </Layout>
  </>
}

export default Index