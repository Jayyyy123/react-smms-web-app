import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import fire from "./firebase";
import Login from "./Login";
import Navbar from "./Navbar";
import Booking from "./Booking";
import Renting from "./Renting";
import CancelBook from "./CancelBook";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* 4 functions */}
          <Route path="/booking">
            <Navbar />
            <Booking />
          </Route>
          <Route path="/renting">
            <Navbar />
            <Renting />
          </Route>
          <Route path="/cancelBook">
            <Navbar />
            <CancelBook />
          </Route>
          <Route path="/contact">
            <Navbar />
            <Contact />
          </Route>
          {user ? (
            <Route path="/">
              <Navbar handleLogout={handleLogout} />
              <Home />
            </Route>
          ) : (
            <Route path="/">
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignup={handleSignUp}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                passwordError={passwordError}
                emailError={emailError}
                clearErrors={clearErrors}
                clearInputs={clearInputs}
              />
            </Route>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
