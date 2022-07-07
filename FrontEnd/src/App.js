import React, { useState } from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import MainHeader from "./Components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = async (email, password) => {
    console.log("login handler", email);
    const response = await fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: { "Content-type": "application/json" },
    });
    const token = await response.json();
    console.log(token);
    localStorage.setItem("token", token.data);

    setIsLoggedIn(true);
    tokenHandler();
  };

  const tokenHandler = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3000/", {
      method: "GET",

      headers: { token: token },
    });
    const userDetails =  await response.json();
    console.log(userDetails);

    
  };

  // const uD = () => {
  //   setIsLoggedIn(true);
  // }
  
 
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home  onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
