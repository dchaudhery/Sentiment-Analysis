import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../Components/Sentiment/HomePage'
import SentimentSummaryPage from '../Components/Sentiment/SentimentSummaryPage'

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/summary' component={SentimentSummaryPage} />

      
      </Switch>
    </React.Fragment>
  );
}

export default App;
