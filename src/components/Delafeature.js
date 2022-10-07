import React from 'react'
import confrencehall from '../della/confrencehall.jpg';
import dellagiobed from '../della/dellagiobed.jpg';
import dellagiofntspc from '../della/dellagiofntspc.jpg';
import foods from '../della/foods.jpg';
import reception from '../della/reception.jpg';


function Delafeature() {
  return (
    <div>
    <div>
          <h1>take a walk through dellagio</h1>
          
    </div>
  <div className='firstrow'>

      
        <div className='card'>
        <h2>we got get spaciouse confrencehall</h2>
        <img src={confrencehall} alt =""/>
        <p>we got spaciouse space and Quality sounds for your confrence</p>
       
        </div>
       

        <div className='card'>
        <h2 >we got confotable beds</h2>
        <img src={dellagiobed} alt =""/>
        <p>we got all kinds of outstanding beds and styles</p>
       
        </div>

        <div className='card' >
        <h2>we got a good view at all sides</h2>
        <img src={dellagiofntspc} alt =""/>
        <p></p>
        
        </div>

        <div className='card'>
        <h2>all kinds of foods are being served being it continental or  local</h2>
        <img src={foods} alt =""/>
        <p> </p>
        
        </div>
        
        <div className='card'>
        <h2>we have a nice reception</h2>
        <img src={reception} alt =""/>
        <p></p>
        
        </div>
        </div>
        
        
       <button>contact us</button>
    
    </div>
  )
}

export default Delafeature

