import React from 'react'
import './Contact.css'
import plug from '../../img/plug.png'

const Contact = () => {
  return (
    <div className='contact' >
        <div className='contact_div1' >
           <div className='contact_div1_1' >
               <h1>Contact Us</h1>
               <img src={plug} alt="" />
           </div>
           <form action="">
              <input type="text"  placeholder='Name' /><br /><br />
              <input  type="email"  placeholder='Email' /><br /><br />
              <input  type="number"  placeholder='Phone number' /><br /><br />
              <input type="text"  id='message' placeholder='Message' /><br /><br />
              <input type="submit"  id='inpbutt'  value='SEND' />
           </form>
        </div>
        <div className='contact_div2' >
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10500.703509931973!2d2.301270017300398!3d48.854856509850215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6702864536459%3A0x1c0b82c6e1d85160!2zNzUwMDcg0J_QsNGA0LjQtiwg0KTRgNCw0L3RhtC40Y8!5e0!3m2!1sru!2sam!4v1695147942145!5m2!1sru!2sam"  style={{width:'100%',height:'450px'}} ></iframe>
        </div>
    </div>
  )
}

export default Contact