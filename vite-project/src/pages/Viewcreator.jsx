import React, { useEffect } from 'react'
import { supabase } from '../client'
import { useState } from 'react'

const Viewcreator = (props) => {
  const {creator, viewId} = props
  const [viewcreator, setViewcreator] = useState({})

  useEffect(() => {
    fetchViewData()
  } ,[])

  const fetchViewData = async () => {
    const {data, error} = await supabase
    .from('creators')
    .select()
    .match({id: viewId})
    console.log(data)
    setViewcreator(data[0])

  }
  

  return (
    <div>
      <h1>View Creator</h1>
      <h2>{viewcreator.name}</h2>
      <img src={viewcreator.imageURL} alt="" />
      <p>{viewcreator.description}</p>
      <a href={viewcreator.url}>{viewcreator.url}</a>
    </div>
  )
}

export default Viewcreator
