import React from 'react'
import './About.css'
import razet from '../../img/plug.png'
import about1 from '../../img/about-img1.jpg'
import about2 from '../../img/about-img2.jpg'

const About = () => {
  return (
    <div  className='About'>
        <div   className='About1' >
            <div className='about_div1' >
               <div className='about_div1_1' >
                   <h1>About Us</h1>
                   <img src={razet} alt="" />
               </div>
               <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus, aliquam molestias optio quo magni? 
                Aspernatur consectetur mollitia tenetur atque illum, 
                blanditiis animi accusamus quod natus? Impedit vero
                 fugiat suscipit mollitia corporis ipsum voluptas recusandae.
                </span><br />
                <br />
                <button>Read More</button>
            </div>
            <div className='about_div2' >
                <div className='about_div2_1' >
                    <div  className='about_div2_2'>

                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About