import React, { useState } from 'react'
import './heder.css'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'

const Heder = () => {
  const [clickbuthom, onClickbuthom] =useState('hombutton1')
  const [clickbutabout, onClickbutabout] =useState('hombutton')
  const [clickbutservis, onClickbutservis] =useState('hombutton')
  const [clickbutblog, onClickbutblog] =useState('hombutton')
  const [clickbutcontact, onClickbutcontact] =useState('hombutton')
  function contact(){
    onClickbuthom('hombutton')
    onClickbutabout('hombutton')
    onClickbutservis('hombutton')
    onClickbutblog('hombutton')
    onClickbutcontact('hombutton1')

  }

  function home(){
    onClickbuthom('hombutton1')
    onClickbutabout('hombutton')
    onClickbutservis('hombutton')
    onClickbutblog('hombutton')
    onClickbutcontact('hombutton')

  }
  function about(){
    onClickbuthom('hombutton')
    onClickbutabout('hombutton1')
    onClickbutservis('hombutton')
    onClickbutblog('hombutton')
    onClickbutcontact('hombutton')

  }
  function servis(){
    onClickbuthom('hombutton')
    onClickbutabout('hombutton')
    onClickbutservis('hombutton1')
    onClickbutblog('hombutton')
    onClickbutcontact('hombutton')

  }
  function blog(){
    onClickbuthom('hombutton')
    onClickbutabout('hombutton')
    onClickbutservis('hombutton')
    onClickbutblog('hombutton1')
    onClickbutcontact('hombutton')

  }
  return (
    <div>
        <div className='heder' >
           <Link  style={{textDecoration:'none'}}  to={'/'}>
             <div className='logo'  onClick={home} >
                <img src={logo} alt="" />
                <b  id='logo' >Electrochip</b>
               </div>
            </Link>
            <div className='menu' >
              <Link  to={'/'} >
                 <button className={clickbuthom}  onClick={home} >HOME</button>
              </Link >
              <Link to={'/about'} >
              <button className={clickbutabout} onClick={about} >ABOUT</button>

              </Link>
              <Link to={'/servis'} >
              <button   className={clickbutservis} onClick={servis}>SERVICE</button>

              </Link  >
              <Link to={'/blog'} >
                 <button    onClick={blog} className={clickbutblog}>BLOG</button>
              </Link>
              <Link to={'/contact'} > 
                   <button onClick={contact} className={clickbutcontact}>CONTACT</button>

              </Link>
                
                
               
               
                
            </div>
        </div>
    </div>
  )
}

export default Heder