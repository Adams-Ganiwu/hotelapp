import React from 'react'
import washroom from '../nuoyong/washroom.jpg';

import front from '../nuoyong/front.png';
import bed from '../nuoyong/bed.jpg';
import food from '../nuoyong/food.jpg'
import NavBar from './NavBar';
import { Link } from 'react-router-dom'

function NuoyougEmpirefeatures() {
  return (
    <div>
      <NavBar/>
      <h3>just take a walk through nuoyong for an amazing feeling</h3>
       <div>
      <div className='firstrow'>

      
        <div className='card'>
        <h2>we got outstanding washrooms</h2>
        <img src={washroom} alt =""/>
        <p></p>
       
        </div>
       

        <div className='card'>
        <h2 >we got an attractive front</h2>
        <img src={front} alt =""/>
        <p></p>
       
        </div>

       

        <div className='card'>
        <h2> all kinds of foods are being served being it continental or  local</h2>
        <img src={food} alt =""/>
        <p></p>
        
        </div>
        
        <div className='card'>
        <h2>when it comes to beds you are coverd being it double, queensize or kingsize</h2>
        <img src={bed} alt =""/>
        <p></p>
        
        </div>
        </div>
    
    </div>

       <div>
       <button> <Link to="/book">add booking</Link>  </button>
    </div>
      
    </div>
  )
}

export default NuoyougEmpirefeatures
