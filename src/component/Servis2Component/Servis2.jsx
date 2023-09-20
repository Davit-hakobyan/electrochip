import React from 'react'
import razet from '../../img/plug.png'
import './servis2.css'
import n1 from '../../img/s1.png'
import n2 from '../../img/s2.png'
import n3 from '../../img/s3.png'
import n4 from '../../img/s4.png'
import n5 from '../../img/s5.png'

const Servis2 = () => {
  return (
    <div  className='servis2' >
       <div className='serv2ver' >
          <h1>Our Services</h1>
          <img src={razet} alt="" />
       </div>
        <div className='serv2seces' >
            <div className='serv2sec1' >
                <img src={n1} alt="" />
                <h2>Equipment installation</h2>
                <br />
                <span>There are many variations of</span><br />
                <span>passages of Lorem Ipsum available,</span>

            </div>
            <div className='serv2sec1' id='serv2sec1' >
                <img src={n2} alt="" />
                <h2>Windmill Energy</h2>
                <br />
                <span>There are many variations of</span><br />
                <span>passages of Lorem Ipsum available,</span>

            </div>
            <div className='serv2sec1' >
                <img src={n3} alt="" />
                <h2>Equipment Maintenance</h2>
                <br />
                <span>There are many variations of</span><br />
                <span>passages of Lorem Ipsum available,</span>

            </div>
        </div>
        <div   className='serv2seces'  > 
            <div className='serv2sec1' >
                <img src={n4} alt="" />
                <h2>Offshore Engineering</h2>
                <br />
                <span>There are many variations of</span><br />
                <span>passages of Lorem Ipsum available,</span>

            </div>
            <div className='serv2sec1'  >
                <img src={n5} alt="" />
                <h2>Electrical Wiring</h2>
                <br />
                <span>There are many variations of</span><br />
                <span>passages of Lorem Ipsum available,</span>

            </div>

        </div>
    </div>
  )
}

export default Servis2