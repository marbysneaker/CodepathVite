import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
import CreatorCard from '../components/CreatorCard'

const Main = (props) => {
  const {creator, handleDeleteCreator, setEditId} = props
  
  return (
    <div className='main-container'>
      <h1>CREATORVERSE</h1>

      <div className='buttons'>
        <Link to="/addcreator">Add creator</Link>
      </div>
      <div className='buttons'>
        <Link to="/showcreators">Show creators</Link>"  
      </div>     
      
      <div className="creator-container">

        {creator.slice(0,5).map((creator,index) => (
          
          <CreatorCard creator={creator} key={index} handleDeleteCreator={handleDeleteCreator} setEditId={setEditId}/>
          
        ))}
        
      </div>
        
      
    </div>
      
  )
}

export default Main
