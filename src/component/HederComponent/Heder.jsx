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
  const [medmenu,setMedmenu]= useState(true)
  const [menu1disp,setMenu1disp]= useState('none')
  const [manutru,setmanutru]=useState(false)
  function Medmenu(){
    setMedmenu(!medmenu)
    setmanutru(!manutru)
    if(!manutru){
      setMenu1disp('block')

    }
    if(manutru){
      setMenu1disp('none')
    }

    

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
            <div className='mediamenu' >
                <div  className='mediamenu_div1' onClick={Medmenu} >
                 {medmenu? <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                          </svg>
                    }
                </div>
            </div>
            <div className='menu' >
              <Link  to={'/'} >
                 <button className={clickbuthom}  onClick={home}  >HOME</button>
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
        <div className='menu1'  style={{ display:menu1disp}}  >
              <Link  to={'/'} >
                 <div className='menu1_div' >
                    <button className={clickbuthom}  onClick={home} >HOME</button>
                 </div>
              </Link >
              <Link to={'/about'} >
                <div  className='menu1_div' >
                     <button className={clickbutabout} onClick={about} >ABOUT</button>
                </div>

              </Link>
              <Link to={'/servis'} >
                  <div   className='menu1_div'>
                     <button   className={clickbutservis} onClick={servis}>SERVICE</button>
                  </div>

              </Link  >
              <Link to={'/blog'} >
                   <div   className='menu1_div'>
                       <button    onClick={blog} className={clickbutblog}>BLOG</button>
                   </div>
              </Link>
              <Link to={'/contact'} > 
                   <div   className='menu1_div'>
                       <button onClick={contact} className={clickbutcontact}>CONTACT</button>
                   </div>

              </Link>
            </div>
    </div>
  )
}

export default Heder