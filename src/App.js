//run rafce

import React from 'react'
import './App.css'

import { Footer, Blog, Possibility, Features, WhatGPT4, Header } from './containers';
import { CTA, Brand, Navbar} from './components';

const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT4 />
      <Features />
      <Possibility />
      <Blog />
      <CTA />
      <Footer />
    </div>
  )
}

export default App