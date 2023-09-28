import React from 'react'
import { useState } from 'react'
import './Servis.css'
import sladimg from '../../img/slider-img.jpg'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import nkar1 from '../../img/about-img1.jpg'
import nkar2 from '../../img/about-img2.jpg'
import nkar3 from '../../img/blog1.jpg'
import nkar4 from '../../img/blog2.jpg'
import nkar5 from '../../img/slider-img.jpg'

const Servis = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];
 
 const[zax,setzax]= useState(0)
 const [none,setnone]= useState(true)
 const [none1,setnone1]= useState(true)
function f(){

 setzax((valu)=>{

   const k = valu+300
   console.log(k);
   if(zax===300){
     setnone(!none)
    }
   setnone1(true)
 
  
   return Math.min(k,600)
 })
 
}
function f1(){

 setzax((valu)=>{
   const k = valu-300
   console.log(k);
   return Math.max(k,-600)
 })
 setnone(true)
 if(zax===-300){
   setnone1(!none)
  }
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
                  <div  className='but1' style={{display:none?'block':'none'}} onClick={f} >
                    <svg  id='svg' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                  </div>
                  <div className='erevacox' >
                    <div className='slajd' style={{
                      transform:`translateX(${zax}px)`
                       }} >
                      <div  className='slajd_1' >
                        <img className='img' src={nkar1} alt="" />
                      </div>
                      <div   className='slajd_2'>
                        <img className='img'  src={nkar2} alt="" />
                      </div>
                      <div  className='slajd_3'>
                        <img className='img'  src={nkar3} alt="" />
                      </div>
                      <div  className='slajd_4'>
                        <img className='img'  src={nkar4} alt="" />
                      </div>
                      <div  className='slajd_4'>
                        <img className='img'  src={nkar5} alt="" />
                      </div>
                    </div>
                  </div>
                  <div  onClick={f1}    className='but' style={{display:none1?'block':'none'}} >
                    <svg  id='svg' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
              </div>
            </div>
        </div>
  )
}

export default Servis