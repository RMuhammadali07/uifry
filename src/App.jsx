import React from 'react'
import "./App.css"
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Features from './components/features/Features'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Home />
      <Features />
      <Footer />
    </div>
  )
}

export default App
