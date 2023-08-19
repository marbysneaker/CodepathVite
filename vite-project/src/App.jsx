import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Addcreator from './pages/Addcreator';
import Editcreator from './pages/Editcreator';
import Showcreators from './pages/Showcreators';
import CreatorCard from './components/CreatorCard';
import Main from './pages/Main';
import Viewcreator from './pages/Viewcreator';
import { useRoutes } from "react-router-dom";
import {supabase} from "./client.js"

import './App.css'


function App() {
  
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [creator, setCreator] = useState([])
  const [editId, setEditId] = useState(null)
  const [viewcreator, setViewcreator] = useState(null)
  const [viewId, setViewId] = useState(null)

  const handleDeleteCreator = async (id) => {
    const {data, error} = await supabase
    .from('creators')
    .delete()
    .match({id: id})
    console.log(data)
  }
  const handleEditCreator = async (id) => {
    const {data, error} = await supabase
    .from('creators')
    .update({name: name, url: url, description: description, imageURL: imageURL})
    .match({id: id})
    console.log(data)
  }
  const setEditIdHandler = (id) => {
    setEditId(id)
  }
  const setViewIdHandler = (id) => {
    setViewId(id);
  }
   



  let element= useRoutes([
    {
      path: "/",
      element: <Main creator={creator} handleDeleteCreator={handleDeleteCreator} setEditIdHandler={setEditIdHandler} setEditId={setEditId}  setViewIdHandler={setViewIdHandler}/>,
    },{
        path: "/addcreator",
        element: <Addcreator name={name} setName={setName} url={url} setUrl={setUrl} description={description} setDescription={setDescription} imageURL={imageURL} setImageURL={setImageURL} />,
      },
      
      {
        path:"/editcreator",
        element: <Editcreator editId={editId} handleEditCreator={handleEditCreator} name={name} setName={setName} url={url} setUrl={setUrl} description={description} setDescription={setDescription} imageURL={imageURL} setImageURL={setImageURL}/>,
  
      },
      {
        path:"/showcreators",
        element: <Showcreators creator={creator} />,
  
      }
      ,
      {
        path:"/viewcreator",
        element: <Viewcreator viewId={viewId} />,
  
      }
      
   
    

  ])

  


  
useEffect(() => {
  fetchData()
}, [])


const fetchData = async () => {
     const  {data, error} = await supabase
    .from('creators')
    .select()
    
    setCreator(data);
}
  

  return element;

  
}

export default App
