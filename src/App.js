import React, { useEffect } from 'react'
import './App.css'
import HomeScreen from './Components/Screens/HomeScreen/HomeScreen'
import ProfileScreen from './Components/Screens/ProfileScreen/ProfileScreen'
import LoginScreen from './Components/Screens/LoginScreen/LoginScreen'
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { auth } from './firebase'

function App() {
  const user = null

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        console.log(userAuth)
      } else {

      }
    })
    return unsubscribe
  },[])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
          {/* <Route path='/profile'>
            <ProfileScreen />
          </Route> */}
          <Route path='/'>
            <HomeScreen />
          </Route>
        </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
