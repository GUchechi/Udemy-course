import Card from "./Shared/Card"

const FeedbackItem = ({item}) => {
  return (
    
       <Card>
         <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
       </Card>
    
  )
}

export default FeedbackItem 