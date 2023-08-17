import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
import CreatorCard from '../components/CreatorCard'

const Main = ({creator}) => {
  return (
    <div className='main-container'>
      <h1>CREATORVERSE</h1>

      <div className='buttons'>
        <Link to="/addcreator">Add creator</Link>
      </div>        
      
      <div className="creator-container">

        {creator.map((creator,index) => (
          // <div key={index}>
          <CreatorCard creator={creator} key={index}/>
          // </div>
        ))}
        
      </div>
        
      
    </div>
      
  )
}

export default Main
