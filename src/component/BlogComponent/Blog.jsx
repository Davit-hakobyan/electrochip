import React from 'react'
import './Blog.css'
import blogimj1 from '../../img/blog1.jpg'
import blogimj2 from '../../img/blog2.jpg'
import plug from '../../img/plug.png'

const Blog = () => {
  return (
    <div>
        <div className='blog' >
            <div className='blog_div1' >
                <h1>Blog</h1>
                <img  src={plug} ></img>
            </div>
            <div  className='blog_div2' >
                <div>
                    <img src={blogimj1} alt="" /><br /><br />
                    <div  >
                       <h2>Blog Title Goes Here</h2>
                       <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Laborum vero molestias voluptatibus voluptate dolorem, incidunt blanditiis 
                         placeat delectus perferendis minus?
                       </span>
                    </div>
                </div>
                <div>
                    <img src={blogimj2} alt="" /><br /><br />
                    <div>
                      <h2>Blog Title Goes Here</h2>
                      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Laborum vero molestias voluptatibus voluptate dolorem, incidunt blanditiis 
                         placeat delectus perferendis minus?
                       </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog