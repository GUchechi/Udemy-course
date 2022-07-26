import React from 'react'
import FeedBackData from '../Data/FeedBackData'

const FeedBackList = ({feedBack}) => {
    if(!feedBack || feedBack.length === 0) {
        return <p>No feedback yet</p>
    } 
  return (
    <div>{feedBack}</div>
  )
}

export default FeedBackList