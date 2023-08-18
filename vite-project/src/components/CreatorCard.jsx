import React from 'react'

const CreatorCard = (props) => {
    const {creator} = props
    const {index} = props
  return (
    <div >
      <h1>{creator.name}</h1>
      <img src={creator.imageURL} alt="" />
    </div>
  )
}

export default CreatorCard
