import React from 'react'

import Servis from '../../component/ServisComponent/Servis'
import Servis2 from '../../component/Servis2Component/Servis2'
import About from '../../component/AboutComponent/About'
import Blog from '../../component/BlogComponent/Blog'
import Contact from '../../component/ContactComponent/Contact'

const HomePag = () => {
  return (
    <div>
       <Servis/>
       <Servis2/>
       <About/>
       <Blog/>
       <Contact/>
    </div>
  )
}

export default HomePag