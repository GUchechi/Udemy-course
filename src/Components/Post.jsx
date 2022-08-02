import {Navigate, useNavigate} from 'react-router-dom'
import React from 'react'

const Post = () => {
    const status = 200;
    const navigate = useNavigate()

    const onClick = () => {
        console.log('Hello')
        navigate('/about')
    }

    if(status === 404) {
        return <Navigate to='notFound'/>
    }
  return (
    <div>
        <h1>Posts</h1>
        <button onClick={onClick}>Click me!!!</button>
    </div>
  )
}

export default Post