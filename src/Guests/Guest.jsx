import React from 'react'
import "./Guest.css"
import download from "./download.jpg"

const Guest = () => {
  return (
    <div className='guest'>
        <div className='guestlist'>
            <img  className="guestimg" src={download}></img>
            <div className='guesttitle'>

                <button className='guestbtn'>5🌟 </button>
                <p className='rating'>$10 Hotel Kinnara</p> 
                <p>Excellent</p>
            </div>
            </div>

        <div className='guestlist'>
            <img  className="guestimg" src={download}></img>
            <div className='guesttitle'>
                <button className='guestbtn'>5🌟 </button>
                <p className='rating' >$10 Hotel Taj Deccan</p> 
                <p>Good</p>
            </div>
            </div>
            <div className='guestlist'>
            <img  className="guestimg" src={download}></img>
            <div className='guesttitle'>
                <button className='guestbtn'>5🌟</button>
                <p className='rating'>$10 Hotel Subrabha</p> 
                <p>Excellent</p>
            </div>

        </div>
        <div className='guestlist'>
            <img  className="guestimg" src={download}></img>
            <div className='guesttitle'>
                <button className='guestbtn'>5🌟</button>
                <p className='rating'>$10 Hotel Sitara</p> 
                <p>Excellent</p>
            </div>

        </div>
        <div className='guestlist'>
            <img  className="guestimg" src={download}></img>
            <div className='guesttitle'>
                <button className='guestbtn'>4.5🌟 </button>
                <p className='rating'> $10 Grand Vitara</p> 
                <p>Excellent</p>
            </div>

        </div>

        </div>
        


  )
}

export default Guest