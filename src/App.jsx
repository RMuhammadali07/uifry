import React from 'react'
import "./App.css"
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Features from './components/features/Features'
import Advadnages from './components/advadnages/Advadnages'
import Fully from './components/fully/Fully'
import Testimonial from './components/testimonial/Testimonial'
import Faq from './components/faq/Faq'
import Download from './components/download/Download'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Home />
      <Features />
      <Advadnages />
      <Fully />
      <Testimonial />
      <Faq />
      <Download />
      <Footer />
    </div>
  )
}

export default App
  