import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateComponent from "./components/PrivateComponent";
import Logged from "./components/Logged";

function App() {
  return (
    <>
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/" element={<h1>path1</h1>}></Route>
              <Route path="/addnote" element={<h1>addnote</h1>}></Route>
              <Route path="/logout" element={<h1>logout</h1>}></Route>
            </Route>
            <Route element={<Logged />} >
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            </Route>
        </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;
