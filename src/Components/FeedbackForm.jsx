import React, { useState } from 'react'
import Button from './Shared/Button';
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
           <Button type='submit' version='secondary'>Send</Button>
           </div>
        </form>
    </Card>
  )
}

export default FeedbackForm