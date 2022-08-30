import './App.css';
import {Route, Switch} from 'react-router-dom'
import Landing from './components/LandingPage';
import Home from './components/Home'
import Create from './components/Create'
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Switch>
       <Route exact path='/'>
        <Landing/>
       </Route>
       <Route path='/home'>
        <Home />
       </Route>
       <Route path='/create'>
        <Create/>
       </Route>
       <Route path='/detail/:id'>
        <Detail/>
       </Route>
      </Switch>
    </div>
  );
}

export default App;
