import React, { createContext, useState } from "react";
import "./App.css";
import BookLocation from "./Components/BookLocation/BookLocation";
import Header from "./Components/Header/Header";
import Location from "./Components/Location/Location";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HotelList from "./Components/HotelList/HotelList";
import NotFound from "./Components/NotFound/NotFound";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [bookInfo, setbookInfo] = useState({});

  return (
    <div className="App">
      <UserContext.Provider
        value={[loggedInUser, setLoggedInUser, bookInfo, setbookInfo]}
      >
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Location />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/location/:locationId">
              <BookLocation />
            </Route>
            <PrivateRoute exact path="/place/search/:destination">
              <HotelList></HotelList>
            </PrivateRoute>
            <Route path="*">
							<NotFound/>
						</Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
