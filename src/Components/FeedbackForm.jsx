import React, { useState } from 'react'
import Card from './Shared/Card'

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const handleChangeText = (event) => {
        setText(event.target.value);
    }
  return (
    <Card>
        <form action="">
            <h2>How would you rate your service with us?</h2>
            {/* @todo - rating select component */}
           <div className="input-group">
           <input onChange={handleChangeText} type="text" placeholder='Write me a review' />
           <button type='submit'>Send</button>
           </div>
        </form>
    </Card>
  )
}

export default FeedbackForm