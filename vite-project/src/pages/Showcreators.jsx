import React from 'react'
import CreatorCard from '../components/CreatorCard'
import './Showcreators.css'
import { Link } from 'react-router-dom'
const Showcreators = (props) => {
  const {creator} = props
  return (
    <>
    <div className="buttons">
        <Link to="/">Home</Link>
      </div>
    <h1>All Creators</h1>
    <div className="showcreators">
      {creator.map((creator,index) => (
        <CreatorCard key={index} creator={creator}/>
          ))}
    
    </div>
    </>
  )
}

export default Showcreators
