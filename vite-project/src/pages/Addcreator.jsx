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
    alert('Creator added')
    setName('')
    setUrl('')
    setDescription('')
    setImageURL('')

  }


    
  return (
    <div className="Addcreator">
      
      <div className="home-button">
        <Link to="/">Home</Link>
      </div>
      <div> 
        Add creator
      
      </div>
      <div className="input-container">
        <Texfield value={name}fullWidth id="standard-basic" label="Name" onChange={e=>setName(e.target.value)}/>
        <Texfield value={url} id="standard-basic" label="URL" onChange={e=>setUrl(e.target.value)}/> 
        <Texfield value={description} id="standard-basic" label="Description" onChange={e=>setDescription(e.target.value)} />
        <Texfield value={imageURL}id="standard-basic" label="ImageURL" onChange={e=>setImageURL(e.target.value)} />
        <Button variant="contained" onClick={()=>handleAddCreator()}>Add creator</Button>
      </div>
      
      </div>

  )
}

export default Addcreator
