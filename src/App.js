// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken'
// CSS
import './App.css';
//Components
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';
import Journal from'./components/Journal';
import JournalView from './components/JournalView';
import JournalEdit from './components/JournalEdit';
import UserEdit from './components/UserEdit';


const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  return <Route {...rest } render={(props) => {
    return user ? <Component { ...rest } { ...props }/> : <Redirect to="/login" />
  }}/>
}

function App() {
  // Set state values here
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  

  useEffect(() => {
    let token;
    
    // if there is no token in localStorage, then user is not authenticated
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    console.log('nowCurrentUser is here....');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null)
      setIsAuthenticated(false)
    }
  }

  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} user={currentUser}/>
      <div className="container mt-5">
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route 
            path='/login' 
            render={ (props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} />} />
          <Route path='/about' component={ About } />
          <PrivateRoute path='/journal' component={Journal} user={currentUser}/>
          <PrivateRoute path='/journalView' component={JournalView} user={currentUser} />
          <PrivateRoute path='/journalEdit/:id' component={JournalEdit} user={currentUser}/>
          <PrivateRoute path="/profile" component={ Profile } user={currentUser}/>
          <PrivateRoute path="/details" component={ ProfileDetails } user={currentUser}/>
          <PrivateRoute path="/Edit" component={UserEdit} user={currentUser}/>
          <Route exact path="/" component={ Welcome }/>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
