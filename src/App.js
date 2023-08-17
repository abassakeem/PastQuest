import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Switch, Routes} from 'react-router-dom'
import Homepage from './components/homepage/homepage';
import Login from "./components/login/login";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import PracticeTest from './components/practiceTest/practiceTest';
import Start from './components/start/start';
import QuizSummary from './components/quizSummary/quizSummary';
import SignUp from './components/sign up/signUp';
import LogIn from './components/login/login';



function App() {
  return (
    <Fragment>
      <Helmet><title>PastQuest</title></Helmet>

    <Router>
     
      <div>
        
      
    <Switch>
        <Route exact path="/" component={Homepage} />
      
        <Route exact path="/login" component={Login} />
        <Route exact path="/practice_test/start" component={Start} />
        <Route exact path="/practice_test" component={PracticeTest} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/start/quiz_summary" component={QuizSummary}/>
       

      </Switch>
        </div>
        
       
        
    
       
    
     
    </Router>
    </Fragment>
    
  );
}

export default App;
