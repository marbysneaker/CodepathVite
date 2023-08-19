import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './CreatorCard.css'

const CreatorCard = (props) => {
    const {creator} = props
    const {index} = props
    const {handleDeleteCreator} = props
    // const {handleEditCreator} = props
    const {handleViewCreator} = props
    const {setEditId} = props
    const {setViewIdHandler} = props
    console.log(creator);
  return (
    <div className='creatorcard'>
      <h2>{creator.name}</h2>
      <img src={creator.imageURL} alt="" />
      <div className="buttons">
      <Link to="/editcreator"><Button variant="contained" onClick={()=>setEditId(creator.id)}>Edit </Button></Link>
      <Button variant="contained" onClick={()=>handleDeleteCreator(creator.id)}>Delete</Button>
      <Link to="/viewcreator"><Button variant="contained" onClick={()=>setViewIdHandler(creator.id)}>View </Button></Link>
    </div>
    </div>
    
  )
}

export default CreatorCard
