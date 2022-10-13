import React, { useState } from 'react'
import NavBar from './NavBar';

function Bookform({submit}) {
const [booking, setBooking]= useState({
    name:"",
    location:"",
    hotelname:"",
    stayduration:"",
    phone:""
    
});
const handler =(event) =>{
setBooking((prev)=>({
    ...prev,
    [event.target.name]: event.target.value
}));
}

const handleForm =(e)=>{
    e.preventDefault();
    submit(booking)
};




  return (
       <div>
              <NavBar/>
         
      <div className='formContainer'>
         
    <h3>Booking Form</h3>
    <form className='form' action='adamsganiwu67@gmail.com' method='post'>
    <fieldset>
    <legend>fill all fields</legend>
    <div className='form-group row'>
    <label>
     Name
    <input className='form-control' name="name" value={booking.name} type="text" onChange={handler}/>
    </label>

    <label>
    Location
    <input className='form-control' name="location" value={booking.location} type="text" onChange={handler}/>
    </label>
    <label>
    Hotelname
    <input className='form-control' name="hotelname" value={booking.hotelname} type="text" onChange={handler}/>
    </label>
    </div>


    <div className='form-group row'>
    <label>
    stayduration
    <input className='form-control'   name="stayduration" value={booking.stayduration}type="stayduration" onChange={handler}/>
    </label>

    <label>
    Phone
    <input className='form-control'    name="phone" value={booking.phone} type="tel" onChange={handler}/>
    </label>

    </div>

    </fieldset>

    <button className='btn btn-primary' onClick={handleForm}>Add Booking</button>
    </form>
    
 </div>
    </div>
  )
}

export default Bookform