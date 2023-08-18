import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CreatorCard = (props) => {
    const {creator} = props
    const {index} = props
    const {handleDeleteCreator} = props
    // const {handleEditCreator} = props
    const {handleViewCreator} = props
    const {setEditId} = props
  return (
    <div >
      <h2>{creator.name}</h2>
      <img src={creator.imageURL} alt="" />
      <div className="buttons">
      <Link to="/editcreator"><Button variant="contained" onClick={()=>setEditId(creator.id)}>Edit creator</Button></Link>
      <Button variant="contained" onClick={()=>handleDeleteCreator(creator.id)}>Delete creator</Button>
    </div>
    </div>
    
  )
}

export default CreatorCard
