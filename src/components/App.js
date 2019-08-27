import React from 'react';
import { BrowserRouter as Router,
  Route,
  Switch 
} from  'react-router-dom';
import TopWords from  '../../src/containers/words/TopWords';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={TopWords}/>
        <Route path="/words/:count" component={TopWords}/>
      </Switch>
    </Router>);
}
