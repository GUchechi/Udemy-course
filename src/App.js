import { useState } from 'react';
import './App.css';
import FeedbackList from './Components/FeedbackList';
import Header from './Components/Header';
import FeedBackData from './Data/FeedBackData';
function App() {
  const [feedback, setFeedback] = useState(FeedBackData)
  return (
    <>
    <Header />
    <div className="App">
      <FeedbackList  feedback={feedback}/>
    </div>  
    </>
  );
}

export default App;
