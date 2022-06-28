import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'
import'./home.css'


function Home() {
  return (
    <div className='home'>
     <Sidebar/>
     <div className='homeContainer'>container</div>
     
    </div>
  )
}

export default Home