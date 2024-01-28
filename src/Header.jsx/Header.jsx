import React from 'react'
import "./Header.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import {faPlane} from '@fortawesome/free-solid-svg-icons'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faTaxi } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'

function Header() {
   let[hidedate,unhidedate]= useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
  return (
    <>
        <div className='header'>
            <div className='headercomponents'>
                <div className='headerlist'>
                    <div className='headeritem active'>
                    <FontAwesomeIcon icon={faBed}/>
                    <span >Stay</span>
                   </div>
                   <div className='headeritem'>
                   <FontAwesomeIcon icon={faPlane} />           
                            <span>Airplane</span>
                   </div>      
                    <div className='headeritem'>
                    <FontAwesomeIcon icon={faCar} />    
                                    <span>Car</span>
                   </div>
                   <div className='headeritem'>
                   <FontAwesomeIcon icon={faTaxi} />       
                                <span>Cab</span>
                   </div>

                   





                </div>
                <div className='headertitle'>
                    <h1>                     A lifetime of discounts?it's Genius
 </h1>


                   </div>
                   <div className='headerdisc'>
                    <p> 
                    Get rewarded for your travel-unlock instant saving of 10% or more with a free Lambookin account
                    </p>
                   </div>
                   <div className='headerbutton'>
                    <button className='buttons'>Signin</button>
                    <button className='buttons'>Register</button>

                   </div>
                   <div className='search'>
                    <div className='hotelsearchitem'>
                    <FontAwesomeIcon icon={faBed}/>

                    <input className='searchinput' placeholder='where are u going on?'></input>
                    </div>
                
                   <div className='hotelsearchitem'>
                   <FontAwesomeIcon icon={faCalendarDays}/>
                    <span  onClick={()=>{
                        unhidedate(!hidedate)
                    }}> {`${format(date[0].startDate ,"MM/dd/yyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
               {
                  hidedate &&   <DateRange
                     editableDateInputs={true}
                      onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                      ranges={date}
                      className='date'
           />
                
               }

                   </div>
                   <div className='hotelsearchitem'>
                   <FontAwesomeIcon icon={faPerson} />
                   <span> 2 adults 1 children </span>


                   </div>
                   <div className='hotelsearchitem'></div>
                   <button className='searchbutton'>Search</button>






            </div>

            </div>


        </div>

    </>

  )
}

export default Header