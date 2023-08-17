import { useState } from 'react'
import { Link } from "react-router-dom";
import Addcreator from './pages/Addcreator';
import Editcreator from './pages/Editcreator';
import Showcreators from './pages/Showcreators';
import Main from './pages/Main';
import { useRoutes } from "react-router-dom";

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  let element= useRoutes([
    {
      path: "/addcreator",
      element: <Addcreator />,
    },
    {
      path: "/",
      element: <Main/>,

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



  

  

  return element;
  
}

export default App
