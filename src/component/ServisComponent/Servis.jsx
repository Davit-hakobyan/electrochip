import React from 'react'
import { useState } from 'react'
import './Servis.css'
import sladimg from '../../img/slider-img.jpg'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Servis = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];
 const [sl,setsl]=useState(true)
 function f(){
  setsl(false)
 
 }
 function f1(){
  setsl(true)
  
 }
  return (
    <div>
       
        <div className='servis' >
            <div  className='servis_text' >
                <h1>ELECTRICAL SERVICE PROVIDERS</h1>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci expedita dolores, inventore
                     laboriosam eveniet temporibus!</span>
                     <br /><br />
                     <button>Contact Us</button>
            </div>
            <div  className='slid' >
                <div  className='imgdiv' >
                    <img src={sladimg}  className={sl?'sladimg':'sladimg1'} alt="" />  
                </div>
             
                <div className='slaqaj'onClick={f1}   >
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                       <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
                <div  className='slaqzax' onClick={f} >
                    <svg   xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </div>
                 
            </div>
        </div>
    </div>
  )
}

export default Servis