import { Switch, Route, withRouter, Redirect, } from "react-router-dom";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
import HomePage from './Component/Home/Home'
import ResendVerify from './Component/Auth/ResendVerify'
import Verification from './Component/Auth/Verification'
import ProtectedRoute from "./Utils/ProtectedRoute";
import Auth from "./Services/Auth";
import Profile from "./Component/Dashboard/Profile";
import { useEffect, useState } from "react";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
      (async () => {
          try{
            let user = await Auth.getCurrentUser()
            setIsAuthenticated(user);
            setLoading(false)
          } catch(err) {
            setLoading(false)
          }
      })()
  },[])

  if (isLoading) {
      return <div className="App">Loading...</div>;
  }
 return (
    <div className="App">
          <Switch >
          <Route exact path={["/", "/home"]} component={HomePage} /> 
          <Route exact path="/login" >
            {isAuthenticated ? (
              <Redirect to="/profile" />
            ) : <Login setIsAuthenticated={setIsAuthenticated} /> 
            }
          </Route>
          <Route exact path="/register" >
            {isAuthenticated ? (
              <Redirect to="/profile" />
            ) : <Register /> 
            }
          </Route>
          <Route exact path="/verify" >
            {isAuthenticated ? (
              <Redirect to="/profile" />
            ) : <ResendVerify /> 
            }
          </Route>
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            path="/profile"
            
          >
            <Profile setIsAuthenticated={setIsAuthenticated} />
          </ProtectedRoute>
          <Route path="/verification/:email/:token">
           <Verification />
          </Route>
          <Route path="*">
            <div>404 Not found </div>
          </Route>
          </Switch>
    </div>
  );
}

export default withRouter(App);
