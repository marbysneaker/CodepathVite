import React from 'react'
import Texfield from '@mui/material/TextField';
import './Addcreator.css'
import { supabase } from '../client';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Addcreator = (props) => {
  const {name, setName, url, setUrl, description, setDescription, imageURL, setImageURL} = props

  const handleAddCreator = async () => {
    const {data, error} = await supabase
    .from('creators')
    .insert([
      {name: name, url: url, description: description, imageURL: imageURL}
    ])
    console.log(data)
    setName('')
    setUrl('')
    setDescription('')
    setImageURL('')

  }


    
  return (
    <div className="Addcreator">
    
    <div> 
      Add creator
     
    </div>
    <div className="input-container">
      <Texfield fullWidth id="standard-basic" label="Name" onChange={e=>setName(e.target.value)}/>
      <Texfield id="standard-basic" label="URL" onChange={e=>setUrl(e.target.value)}/> 
      <Texfield id="standard-basic" label="Description" onChange={e=>setDescription(e.target.value)} />
      <Texfield id="standard-basic" label="ImageURL" onChange={e=>setImageURL(e.target.value)} />
       <Link to="/"><Button variant="contained" onClick={()=>handleAddCreator()}>Add creator</Button></Link>
    </div>
    
    </div>

  )
}

export default Addcreator
