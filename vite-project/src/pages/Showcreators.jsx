import React from 'react'
import CreatorCard from '../components/CreatorCard'
import './Showcreators.css'
const Showcreators = (props) => {
  const {creator} = props
  return (
    <>
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
