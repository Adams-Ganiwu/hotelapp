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
           <div className='ganew'>
          <p>location:Danku residences</p>
          <p>gps:xw-0005-6785</p>
          <p>prices ranging from Ghc100 to Ghc350</p>

            <p> <Link to="/dela"> Checkout features </Link></p>
            </div>
        </div>
      

   
    

   
      <div className='card'>
         <h5>Nuoyong empire hotel</h5>
        <div>
          <img className='della' src={Nuoyong} alt="no" />
           <div className='ganew'>
          <p>location:wa maseRD Sombo residences</p>
            <p>gps:xw-0005-6785</p>
            <p>prices ranging from Ghc80 to Ghc250</p>
              <p> <Link to="/nuoyong"> Checkout features </Link></p>
              </div>
        </div>
      </div>

    <div>
    

    
      <div className='card'>
      <h5>Royal Cosy Hills Hotel</h5>
        <div>
          <img className='della' src={dubaiimage} alt="no" />
          <div className='ganew'>
          <p>location:Jirapa residences</p>
              <p>gps:xw-0005-6785</p>
              <p>prices ranging from Ghc150 to Ghc650</p>
                <p> <Link to="/dubaifeatures"> Checkout features </Link></p>
                </div>
        </div>
      </div>
</div>
   
    

    
        <div className='card'>
          <h5>Grand Hyat Hotel</h5>
        
          <img className='della' src={Grand} alt="no" />
           <div className='ganew'>
          <p>location:Opposit SSNIT residences</p>
          <p>gps:xw-0005-6785</p>
          <p>prices ranging from Ghc100 to Ghc300 </p>
          <p> <Link to="/grandhyatt"> Checkout features </Link></p>
       </div>
      </div>
</div>
</>
  )
}

export default HomeScreen
