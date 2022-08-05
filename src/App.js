import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { useState } from 'react';
import './App.css';
import FeedbackForm from './Components/FeedbackForm';
import FeedbackList from './Components/FeedbackList';
import FeedbackStats from './Components/FeedbackStats';
import Header from './Components/Header';
import FeedBackData from './Data/FeedBackData';
import AboutPage from './pages/AboutPage';
import AboutPageIconLink from './Components/AboutPageIconLink';
import Post from './Components/Post';
import {FeedbackProvider} from './context/FeedbackContext'


function App() {
  const [feedback, setFeedback] = useState(FeedBackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback]) 
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path='/' element={
            <>
               <FeedbackForm handleAdd={addFeedback} />
              <FeedbackStats/>
              <FeedbackList  
              feedback={feedback}
              handleDelete={deleteFeedback}/>
            </>
          }></Route>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/post/*' element={<Post/>}/>
        </Routes>
        <AboutPageIconLink />
      </div>  
    </Router>
    </FeedbackProvider>
  );
}

export default App;
