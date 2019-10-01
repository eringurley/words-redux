import React from 'react';
import { BrowserRouter as Router,
  Route,
  Switch 
} from  'react-router-dom';
import Searchable from  '../words/Searchable';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/words/:count" component={Searchable}/>
        <Route path="/" component={Searchable}/>
      </Switch>
    </Router>);
}
