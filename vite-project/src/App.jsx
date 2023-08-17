import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Addcreator from './pages/Addcreator';
import Editcreator from './pages/Editcreator';
import Showcreators from './pages/Showcreators';
import CreatorCard from './components/CreatorCard';
import Main from './pages/Main';
import { useRoutes } from "react-router-dom";
import {supabase} from "./client.js"

import './App.css'


function App() {
  
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [creator, setCreator] = useState([])


  let element= useRoutes([
    {
      path: "/",
      element: <Main creator={creator}/>,
    },{
        path: "/addcreator",
        element: <Addcreator name={name}/>,
      },
      
      {
        path:"editcreator",
        element: <Editcreator />,
  
      },
      {
        path:"showcreator",
        element: <Showcreators />,
  
      }
      
   
    

  ])



  
useEffect (()=>{
  fetchData();
})

const fetchData = async () => {
     const  {data, error} = await supabase
    .from('creators')
    .select()
    
    setCreator(data);
}
  

  return element;

  
}

export default App
