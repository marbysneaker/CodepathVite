import { useState } from 'react'
import { Link } from "react-router-dom";
import Addcreator from './pages/Addcreator';
import Editcreator from './pages/Editcreator';
import Showcreators from './pages/Showcreators';
import CreatorCard from './components/CreatorCard';
import Main from './pages/Main';
import { useRoutes } from "react-router-dom";

import './App.css'


function App() {
  
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [creator, setCreator] = useState([
    {
      name: 'Creator 1',
      url: 'https://www.google.com',
      description: 'This is the first creator',
      imageURL: 'https://picsum.photos/200/300'
    },
    {
      name: 'Creator 2',
      url: 'https://www.google.com',
      description: 'This is the second creator',
      imageURL: 'https://picsum.photos/200/300'
    },
  ])


  let element= useRoutes([
    {
      path: "/",
      element: <Main creator={creator}/>,
      children: [{
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
      ]
    },
    

  ])



  

  

  return element;

  
}

export default App
