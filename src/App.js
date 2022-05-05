import { React, useState,useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/AllPosts/AllPosts";
import Login from "./Components/LoginPage/Login";
import CreatePost from "./Components/Posts/CreatePost";
import Nav from "./Components/NavBar/Nav";
import './App.css';


function App() {
  const [isAuth, setAuth] = useState(false);
  let authState = localStorage.getItem("isAuth");
  useEffect(() => {
    setAuth(authState);
  },[authState])
  
  return (
    <>
    <Nav isAuth={isAuth} setAuth={setAuth}/>

    <Router>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} setAuth={setAuth}/>}/>
        <Route path="login" element={<Login setAuth={setAuth}/>}/>
        <Route path="createpost" element={<CreatePost isAuth={isAuth}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
