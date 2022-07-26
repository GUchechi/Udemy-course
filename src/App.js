import './App.css';
import Header from './Components/Header';
import { useState } from 'react';
import FeedBackData from './Data/FeedBackData';
import FeedBackList from './Components/FeedBackList';

function App() {
  const [feedBack, setFeedback] = useState(FeedBackData)
 

  return (
    <>
    <Header />
    <div className="App">
      <FeedBackList feedBack='feedBack'/>
    </div>  
    </>
  );
}

export default App;
