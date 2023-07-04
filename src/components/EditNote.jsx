import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
const EditNote = () => {
  const location=useLocation();
  const navigate=useNavigate();

  const [noteTitle,noteTitleChange]=useState(location.state.title);
  const [noteContent,noteContentChange]=useState(location.state.content)
  const User=JSON.parse(localStorage.getItem('user'));


  const modifyNote=async ()=>{

      const resp=await fetch('http://localhost:8000/edit',{
        method:"PUT",
        headers:{
          "email":location.state.email,
          "_id":location.state._id,
          "Content-Type":"application/json",
          'accessToken':User.accessToken
        },
        body:JSON.stringify({
          title:noteTitle,
          content:noteContent
        })
      })

      console.log(resp.json());

      navigate('/');
  }

  return (
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="EX:Solar System" value={noteTitle} onChange={(e)=>noteTitleChange(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Example textarea</Form.Label>
      <Form.Control as="textarea" rows={10} value={noteContent} onChange={(e)=>noteContentChange(e.target.value)}/>
    </Form.Group>
    <Button variant="primary" onClick={modifyNote}>
        Submit
    </Button>
  </Form>
  )
}

export default EditNote