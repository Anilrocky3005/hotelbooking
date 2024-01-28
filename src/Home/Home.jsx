import React from 'react'
import "./Home.css"
import Navbar from '../Navabar/Navbar'
import Header from '../Header.jsx/Header'
import Features from '../Featur/Features.jsx'

import Properties from '../Properties/Properties'
import Guest from '../Guests/Guest'
import Mail from '../Maillist/Mail'
const Home = () => {
  return (
    <>
    <Navbar />
    <Header />
    <Features />

    <div className='propertiesreact'>
        <h2>Search property type</h2>



    </div>
    <Properties />
    <h5 className='propertiesreact'>
        Most of the Guest love
        
    </h5>
    <Guest />
<Mail></Mail>
    </>


  )
}

export default Home