import { useState } from 'react';
import './App.css';
import FeedbackList from './Components/FeedbackList';
import Header from './Components/Header';
import FeedBackData from './Data/FeedBackData';
function App() {
  const [feedback, setFeedback] = useState(FeedBackData)
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
    <Header />
    <div className="App">
      <FeedbackList  
      feedback={feedback}
      handleDelete={deleteFeedback}
      />
    </div>  
    </>
  );
}

export default App;
