import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'
import "./new.css"

function New() {
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        test
      </div>
    </div>
  )
}

export default New