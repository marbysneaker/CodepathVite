import React, { useEffect } from 'react'
import { supabase } from '../client'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Viewcreator.css'
import {Button} from '@mui/material'

const Viewcreator = (props) => {
  const {creator, viewId} = props
  const [viewcreator, setViewcreator] = useState({})

  useEffect(() => {
    fetchViewData()
  } ,[])

  const fetchViewData = async () => {
    const {data, error} = await supabase
    .from('creators')
    .select()
    .match({id: viewId})
    console.log(data)
    setViewcreator(data[0])

  }
  

  return (
    <div className="viewcreator">
      <div className="home-button">
        <Link to="/">Home</Link>
      </div>
      <h1>View Creator</h1>
      <h2>{viewcreator.name}</h2>
      <img src={viewcreator.imageURL} alt="" />
      <p>{viewcreator.description}</p>
      <a href={viewcreator.url}>{viewcreator.url}</a>
      <div className="viewcreator-buttons">
        <Link to="/"><Button variant="contained">Back</Button></Link>
        <Link to="/editcreator"><Button variant="contained">Edit</Button></Link>
        <Button variant="contained">Delete</Button>

      </div>
    </div>
  )
}

export default Viewcreator
