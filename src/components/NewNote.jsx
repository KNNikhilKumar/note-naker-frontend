import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const NewNote = () => {

const navigate=useNavigate();
let user={};
useEffect(()=>{
  user=JSON.parse(localStorage.getItem('user'));
},[]);

  const submitForm=async (e)=>{
      e.preventDefault();
      const newnote={
        title:e.target.title.value,
        content:e.target.content.value,
        email:user.email
      };
      if(newnote.title.trim()==""||newnote.content.trim()=="")
      {
          alert('empty inputs');
      }
      else
      {
        const resp=await fetch('http://localhost:8000/newnote',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
           'accessToken':user.accessToken,
           "email":user.email
          },
          body:JSON.stringify(newnote)
        });
        console.log(resp);
        navigate('/');
      }
  }

  return (
    <Form onSubmit={submitForm}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="EX:Solar System" name='title'/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Example textarea</Form.Label>
      <Form.Control as="textarea" rows={10} name="content" />
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
  </Form>
  )
}

export default NewNote