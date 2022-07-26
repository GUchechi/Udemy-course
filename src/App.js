import './App.css';
import Header from './Components/Header';
import FeedBackItem from './Components/FeedBackItem';
import { useState } from 'react';
import FeedBackData from './Data/FeedBackData';

function App() {
  const [feedBack, setFeedback] = useState(FeedBackData)
 

  return (
    <>
    <Header />
    <div className="App">
      <FeedBackItem />
    </div>  
    </>
  );
}

export default App;
