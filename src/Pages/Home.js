import React from 'react'
import { Link } from 'react-router-dom'
import BGImage from '../Sources/pizza.jpeg'
import '../CSS/Home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage : `url(${BGImage})` }}>
        <div className='headerContainer'>
            <h1>PizzaMania</h1>
            <p>Life is better with a slice of pizza</p>
            <Link to="/menu">
            <button>Order Now</button>
            </Link>
        </div>
    </div>
  )
}

export default Home