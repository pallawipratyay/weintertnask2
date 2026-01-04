import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLogin(false);
  };

  const handleSignIn = () => {
    setShowLogin(true);
  };

  return (
    <div className="app">
      {!isLoggedIn && showLogin ? (
        <Login onLogin={handleLogin} />
      ) : !isLoggedIn ? (
        <LandingPage onSignIn={handleSignIn} />
      ) : (
        <>
          <Navbar onLogout={handleLogout} />
          <Banner />
          <Row title="NETFLIX ORIGINALS" isLargeRow />
          <Row title="Trending Now" />
          <Row title="Top Rated" />
          <Row title="Action Movies" />
          <Row title="Comedy Movies" />
          <Row title="Horror Movies" />
          <Row title="Romance Movies" />
          <Row title="Documentaries" />
        </>
      )}
    </div>
  );
}

export default App;
