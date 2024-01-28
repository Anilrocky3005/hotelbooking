import React from 'react'
import hyderabad from './charminar.jpg'
import banglore from './banglore.jpg'
import mumbai from './mumbai.jpg'
import './Fetures.css'

const features = () => {
  return (
    <div className='features'>
        <div className='featureitems'>
                <img  className="fimg" src={hyderabad}></img>

                <div className='featuredtitles'>
                    <h1>Hyderabad</h1>
                    <h3>123 properties</h3>

</div>
            </div>
            <div className='featureitems'>
                <img className="fimg" src={banglore}></img>
                <div className='featuredtitles'>
                    <h1>Bangalore</h1>
                    <h3>84 properties</h3>
                    </div>
                    </div>
                    <div className='featureitems'>

                <img   className="fimg" src={mumbai}></img>
                <div className='featuredtitles'>
                    <h1>Mumbai</h1>
                    <h3>814 properties</h3>
                </div>
                </div>
                   </div>
  )
}

export default features