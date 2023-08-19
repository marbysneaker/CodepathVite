import React from 'react'
import CreatorCard from '../components/CreatorCard'
import './Showcreators.css'
import { Link } from 'react-router-dom'
const Showcreators = (props) => {
  const {creator, handleDeleteCreator, setEditId, handleViewCreator, setViewIdHandler} = props
  return (
    <>
    <div className="home-button">
        <Link to="/">Home</Link>
      </div>
    <h1>All Creators</h1>
    <div className="showcreators">
      {creator.map((creator,index) => (
        <CreatorCard creator={creator} key={index} handleDeleteCreator={handleDeleteCreator} setEditId={setEditId} handleViewCreator={handleViewCreator} setViewIdHandler={setViewIdHandler}/>
          ))}
    
    </div>
    </>
  )
}

export default Showcreators
