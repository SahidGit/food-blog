import React from 'react'
import Navbar from './components/navbar';
import Footer from './components/footer';
import Header from './components/Header';
import Content from './components/Content';

const App = () => {

  return (
    <div className='container'>
      <Navbar/>
      <main>
        <Header/>
        <Content/>
      </main>
      <Footer/>
    </div>
  )
}

export default App