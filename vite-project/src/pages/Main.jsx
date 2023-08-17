import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='main-container'>
      <h1>CREATORVERSE</h1>

      <div className='buttons'>
        <Link to="/addcreator">Add creator</Link>
      </div>        
      
      </div> 
  )
}

export default Main
