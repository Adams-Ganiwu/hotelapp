import React from 'react'
import zoo from '../dubai/zoo.jpeg';
import pools from '../dubai/pools.jpeg';
import view from '../dubai/view.jpeg';
import sideview from '../dubai/sideview.jpeg';
import MBed from '../dubai/MBed.jpeg';
import food from '../dubai/food.jpg'

function RoyalCosyHills() {
  return (
    <div>
      <h1>just take a walk through RoyalCosyHills for an amazing feeling</h1>
       <div>
      <div className='firstrow'>

      
        <div className='card'>
        <h2>we got zoo with trained guards</h2>
        <img src={zoo} alt =""/>
       
       
        </div>
       

        <div className='card'>
        <h2 >we got swimingpool with fresh water at every moment</h2>
        <img src={pools} alt =""/>
       
       
        </div>

        <div className='card' >
        <h2>we got a good view at all sides</h2>
        <img src={view} alt =""/>
        
        
        </div>

        <div className='card'>
        <h2>we got you coverd with tasty foods  for the three square meal each day</h2>
        <img src={food} alt =""/>
      
        
        </div>
        <div className='card'>
        <h2>we got you coverd with nice side view</h2>
        <img src={sideview} alt =""/>
        
       
        </div>
        <div className='card'>
        <h2>we got you coverd with nice beds</h2>
        <img src={MBed} alt =""/>
        
        
        </div>
        </div>
        
        
       <button>contact us</button>
    
    </div>
    </div>
  )
}

export default RoyalCosyHills
