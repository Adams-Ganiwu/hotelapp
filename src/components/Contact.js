import React from 'react'
import NavBar from './NavBar';
import {FaWhatsapp} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'


function Contact() {
  return (
    <div clas sname >
       <NavBar/>
      <h3>we provides you with geniue hotel booking at your confort zone</h3>
<div>
      <a href="mailto:gamsondamselbookingapp67@gmail.com">send us a mail</a>
<SiGmail />
</div>
      <div>
        <a href="https://wa.me/0540604084" target="_blank">whatsapp us</a>
        <FaWhatsapp />
        </div>

      <div>
        <a href="">follow us on Facebook</a>
         <BsFacebook />
      </div>

      <div></div>
      
    </div>
  )
}

export default Contact