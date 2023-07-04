import { useEffect, useState } from "react"
import NoteCard from "./NoteCard"
import { useNavigate } from "react-router-dom";

const Notes = () => {

 const [Notes,setNotes]=useState([]);
  const User=JSON.parse(localStorage.getItem('user'));
  const navigate=useNavigate();
  useEffect(()=>{
    const getNotes=async ()=>{

      const user=await JSON.parse(localStorage.getItem("user")).email;
      const url=`http://localhost:8000/notes?user=${user}`;
      const data=await fetch(url,{
        headers:{
          "accessToken":User.accessToken,
          "email":User.email
        }
      });
      if(data.status==420)
      {
          console.log('wrong access');
          localStorage.removeItem('user');
          navigate('/login');
      }
      else
      {
        const notes=await data.json();
        setNotes(notes);
        console.log(notes);
      }
    }
      getNotes();
  },[]);

  

  return (
    <>
      {Notes.map((note)=><NoteCard  key={note._id} note={note}/>)}
      <br />
    </>
  )
}

export default Notes