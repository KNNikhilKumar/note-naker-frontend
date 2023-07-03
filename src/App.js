import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateComponent from "./components/PrivateComponent";
import Logged from "./components/Logged";
import NewNote from "./components/NewNote";
import EditNote from "./components/EditNote";
import Notes from "./components/Notes";
import FullNote from "./components/FullNote";

function App() {
  return (
    <>
    <BrowserRouter>
        <NavBar />
        <div className="container">
        <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/" element={<Notes />}></Route>
              <Route path="/addnote" element={<NewNote />}></Route>
              <Route path="/logout" element={<h1>logout</h1>}></Route>
              <Route path="/edit" element={<EditNote />}></Route>
              <Route path="/expand" element={<FullNote />}></Route>
            </Route>
            <Route element={<Logged />} >
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            </Route>
        </Routes>
        </div>
    </BrowserRouter> 
    </>
  );
}

export default App;
