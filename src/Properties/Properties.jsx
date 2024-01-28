import React from 'react'
import  Hotel from "./Hotel.jpg"
import villa from "./villa.jpg"
import cottages from "./cottages.jpg"
import appartment from "./appartment.jpg"
import "./Properties.css"

function Properties() {
  return (
    <div className='properties'>
        <div className='propertylist'>
            <img className="primg" src={Hotel}></img>
            <div className='propertytitle'>
                <h3>Hotels </h3>
            </div>
        </div>
        <div className='propertylist'>
            <img className="primg" src={villa}></img>
            <div className='propertytitle'>
                <h3>Villa </h3>
            </div>
        </div>
        <div className='propertylist'>
            <img className="primg" src={cottages}></img>
            <div className='propertytitle'>
                <h3>Cottages </h3>
            </div>
        </div>
        <div className='propertylist'>
            <img className="primg" src={appartment}></img>
            <div className='propertytitle'>
                <h3 className='propertytitle'>Appartments </h3>
            </div>
        </div>
    </div>
  )
}

export default Properties