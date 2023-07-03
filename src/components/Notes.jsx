import { useEffect, useState } from "react"
import NoteCard from "./NoteCard"

const Notes = () => {

 const [Notes,setNotes]=useState([]);

  useEffect(()=>{
    const getNotes=async ()=>{

      const user=await JSON.parse(localStorage.getItem("user")).email;
      const url=`http://localhost:8000/notes?user=${user}`;
      const data=await fetch(url);
      const notes=await data.json();
      setNotes(notes);
      console.log(notes);
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