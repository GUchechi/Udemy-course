import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 10,
    },
    {
      id: 1,
      text: 'This item is from context',
      rating: 10,
    },
    {
      id: 1,
      text: 'This item is from context',
      rating: 10,
    },
    {
      id: 1,
      text: 'This item is from context',
       rating: 10,
    }
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit: false,
  })

  // Update the feedback
  const updateFeedback = (id, upditem) => {
      console.log(id, upditem)
  }


  // deleteFeedback
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // editFeedback
  const editFeedback = (item) => {
    if(window.confirm('Are you sure you want to edit this item?')) {
      setFeedbackEdit({
        item,
        edit: true,
      })
    }
  }

// Add FeedBack
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback]) 
  }

  return (
    <FeedbackContext.Provider 
    value={{
      feedback,
      deleteFeedback,
      addFeedback,
      editFeedback,
      feedbackEdit,
      updateFeedback,
      }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext