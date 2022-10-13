import React from 'react'
import bed from '../hyat/bed.jpg'
import backview from '../hyat/backview.jpg'
import carpark from '../hyat/carpark.jpg'
import entrance from '../hyat/entrance.jpg'
import chips from '../hyat/chips.jpg'
import NavBar from './NavBar';
import { Link } from 'react-router-dom'

function GrandHyattfeatures() {
  return (
    <div>
      <NavBar/>
    <div>
      <h1>just have a warmly wellcome to  the surroundies of GrandHyatt</h1>
    </div>
<div className='firstrow'>

      
        <div className='card'>
        <h2>we got outstanding washrooms</h2>
        <img src={bed} alt =""/>
        <p>this washrooms are moderm</p>
       
        </div>
       

        <div className='card'>
        <h2 >we got an attractive front</h2>
        <img src={backview} alt =""/>
        <p></p>
       
        </div>

        <div className='card' >
        <h2>the views of this hotel is attractive</h2>
        <img src={carpark} alt =""/>
        <p> </p>
        
        </div>

        <div className='card'>
        <h2>we got you coverd with tasty foods  for the three square meal each day</h2>
        <img src={entrance} alt =""/>
        <p></p>
        
        </div>
        
        <div className='card'>
        <h2>we got you coverd with nice beds</h2>
        <img src={chips} alt =""/>
        <p></p>
        
        </div>
        </div>
      
     <div>
       <button> <Link to="/book">add booking</Link>  </button>
    </div>

    </div>
  
  )
}

export default GrandHyattfeatures