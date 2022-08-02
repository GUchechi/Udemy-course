import {useParams} from 'react-router-dom'
import React from 'react'

const Post = () => {
    const params = useParams()
  return (
    <div>
        <h1>{params.id}</h1>
    </div>
  )
}

export default Post