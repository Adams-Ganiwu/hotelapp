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
    <div>
    

    <h1>Dellagio Hotel</h1>
      <div className='card col-3'>
        <div>
          <img className='della' src={Dellagio} alt="no" />
          
          <p>location:Opposit SSNIT residences</p>
          <p>gps:xw-0005-6785</p>
          <p> <Link to="/dela"> Check out features </Link></p>
        </div>
      </div>
</div>
    <div>
    

    <h1>Nuoyong empire hotel</h1>
      <div className='card'>
        <div>
          <img className='della' src={Nuoyong} alt="no" />
          
          <p>location:Opposit SSNIT residences</p>
          <p>gps:xw-0005-6785</p>
          <p> <Link to="/nuoyong"> Check out features </Link></p>
        </div>
      </div>
</div>
    <div>
    

    <h1>Royal Cosy Hills Hotel</h1>
      <div className='card'>
        <div>
          <img className='della' src={dubaiimage} alt="no" />
          
          <p>location:Opposit SSNIT residences</p>
          <p>gps:xw-0005-6785</p>
          <p> <Link to="/dubaifeatures"> Check out features </Link></p>
        </div>
      </div>
</div>
    <div>
    

    <h1>Grand Hyat Hotel</h1>
      <div className='card'>
        <div>
          <img className='della' src={Grand} alt="no" />
          
          <p>location:Opposit SSNIT residences</p>
          <p>gps:xw-0005-6785</p>
          <p> <Link to="/grandhyatt"> Check out features </Link></p>
        </div>
      </div>
</div>
</>
  )
}

export default HomeScreen
