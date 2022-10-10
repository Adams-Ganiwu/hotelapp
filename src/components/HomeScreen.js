import React from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom'

import Dellagio from '../Screenshots/Dellagio.png';
import Nuoyong  from '../Screenshots/Nuoyong.png';
import dubaiimage from '../Screenshots/dubaiimage.jpeg';
import Grand from '../hyat/Grand.jpeg';


function HomeScreen() {
  return (
    <>
      <NavBar/>
    <div className='firstrow'>
    

    
          <div className="card">
            <h5>Dellagio Hotel</h5>
          <img className='della' src={Dellagio} alt="no" />
          
          <p>location:Opposit SSNIT residences</p>
          <p>gps:xw-0005-6785</p>
          <p> <Link to="/dela"> Check out features </Link></p>
        </div>
      

   
    

   
      <div className='card'>
         <h5>Nuoyong empire hotel</h5>
        <div>
          <img className='della' src={Nuoyong} alt="no" />
          
          <p>location:Opposit SSNIT residences</p>
          <p>gps:xw-0005-6785</p>
          <p> <Link to="/nuoyong"> Check out features </Link></p>
        </div>
      </div>

    <div>
    

    
      <div className='card'>
      <h5>Royal Cosy Hills Hotel</h5>
        <div>
          <img className='della' src={dubaiimage} alt="no" />
          
          <p>location:Opposit SSNIT residences</p>
          <p>gps:xw-0005-6785</p>
          <p> <Link to="/dubaifeatures"> Check out features </Link></p>
        </div>
      </div>
</div>
   
    

    
        <div className='card'>
          <h5>Grand Hyat Hotel</h5>
        
          <img className='della' src={Grand} alt="no" />
          
          <p>location:Opposit SSNIT residences</p>
          <p>gps:xw-0005-6785</p>
          <p> <Link to="/grandhyatt"> Check out features </Link></p>
       
      </div>
</div>
</>
  )
}

export default HomeScreen
