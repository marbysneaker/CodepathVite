import React from 'react'
import Texfield from '@mui/material/TextField';
import './Editcreator.css'
import { supabase } from '../client';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



const Editcreator = (props) => {
  const {editId, handleEditCreator, name, setName, url, setUrl, description, setDescription, imageURL, setImageURL} = props;

  const setFields = async () => {
    const {data, error} = await supabase
    .from('creators')
    .select('*')
    .match({id: editId})
    console.log(data)
    setName(data[0].name)
    setUrl(data[0].url)
    setDescription(data[0].description)
    setImageURL(data[0].imageURL)
  }

  React.useEffect(() => {
    setFields()
  }, [])


  
  return (
    <div className="EditCreator">
      
    <div className="home-button">
      <Link to="/">Home</Link>
    </div>

    
    <div> 
      Edit Creator
     
    </div>
    <div className="input-container">
      <Texfield fullWidth id="standard-basic" label="Name"value={name} onChange={e=>setName(e.target.value)}/>
      <Texfield value={url} id="standard-basic" label="URL" onChange={e=>setUrl(e.target.value)}/> 
      <Texfield value={description} multiline rows={4} maxRows={6} id="standard-basic" label="Description" onChange={e=>setDescription(e.target.value)} />
      <Texfield value={imageURL} id="standard-basic" label="ImageURL" onChange={e=>setImageURL(e.target.value)} />
       <Link to="/"><Button variant="contained" onClick={()=>handleEditCreator(editId)}>Edit creator</Button></Link>
    </div>
    
    </div>
  )
}

export default Editcreator
