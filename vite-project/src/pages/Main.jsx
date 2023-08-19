import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
import CreatorCard from '../components/CreatorCard'
import { Button } from '@mui/material'

const Main = (props) => {
  const {creator, handleDeleteCreator, setEditId, handleViewCreator, setViewIdHandler} = props

  const lastFiveReversed = creator.slice(-6).reverse();

  
  return (
    <div className='main-container'>
      <h1>CREATORVERSE</h1>

      <div className='main-buttons'>
        <Link to="/addcreator"><Button sx={{width:150}} variant="contained">Add creator</Button> </Link>
      
        <Link to="/showcreators"><Button sx={{width:150}} variant="contained">Show creators</Button></Link>"  
      </div>     
      
      <div className="creator-container">

        {lastFiveReversed.map((creator,index) => (
          
          <CreatorCard creator={creator} key={index} handleDeleteCreator={handleDeleteCreator} setEditId={setEditId} handleViewCreator={handleViewCreator} setViewIdHandler={setViewIdHandler}/>
          
        ))}
        
      </div>
        
      
    </div>
      
  )
}

export default Main
