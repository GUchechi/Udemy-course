import Card from "./Shared/Card"
import { useContext } from 'react'
import {FaTimes} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({item}) => {

  return (
    
       <Card>
         <div className="num-display">{item.rating}</div>
          <button onClick={ () => handleDelete(item.id)}  className="close">
            <FaTimes color='purple'/>
          </button>
        <div className="text-display">{item.text}</div>
       </Card>
    
  )
}

export default FeedbackItem 