import React from 'react'
import CreatorCard from '../components/CreatorCard'
const Showcreators = (props) => {
  const {creator} = props
  return (
    <div className="showcreators">
      {creator.map((creator,index) => (
        <CreatorCard key={index} creator={creator}/>
          ))}
    </div>
  )
}

export default Showcreators
