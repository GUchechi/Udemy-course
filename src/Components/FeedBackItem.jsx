import React, {useState} from 'react'

const FeedBackItem = () => {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is an example of a feedback item.')
  const handleClick = () => {
    setRating(() => {
      return 50;
    })
  }
  return (
    <div className='card'>
        <div className="num-display">{rating}</div>
        <div className="text-display">
            {text}
        </div>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default FeedBackItem