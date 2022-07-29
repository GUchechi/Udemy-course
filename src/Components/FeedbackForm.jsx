import React, { useState } from 'react'
import RatingSelect from './RatingSelect';
import Button from './Shared/Button';
import Card from './Shared/Card'

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [rating,setRating] = useState(10)
    const [message, setMessage] = useState('')
    const handleChangeText = (event) => {
        if(text === '') {
            setBtnDisabled(true);
            setMessage(null)
        } else if (text !== '' &&  text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters long.')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(event.target.value);
    }
  return (
    <Card>
        <form action="">
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
           <div className="input-group">
           <input onChange={handleChangeText} type="text" placeholder='Write me a review' />
           <Button type='submit' version='secondary' isDisabled={btnDisabled}>Send</Button>
           </div>
           {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm