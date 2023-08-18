import React from 'react'
import Texfield from '@mui/material/TextField';
import './Addcreator.css'

const Addcreator = () => {
  return (
    <div className="Addcreator">
    
    <div>
      Add creator
     
    </div>
    <div className="input-container">
      <Texfield id="standard-basic" label="Name" />
      <Texfield id="standard-basic" label="URL" />
      <Texfield id="standard-basic" label="Description" />
      <Texfield id="standard-basic" label="ImageURL" />
    </div>
    
    </div>

  )
}

export default Addcreator
