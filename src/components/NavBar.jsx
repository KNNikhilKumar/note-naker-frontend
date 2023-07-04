import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
 const navigate=useNavigate();
 const addNewNote=()=>{
    navigate('/addnote');
 };
 const logOutFunction=async ()=>{
  localStorage.removeItem("user")
  navigate('/login');
 };
 const isLogged=localStorage.getItem('user');
  return (
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand>SIMPLE NOTE MAKER</Navbar.Brand>
      <Nav className="me-auto">
        {isLogged&&<Button variant="success" size='sm' onClick={addNewNote}>  {" Add Note"}  </Button>}
        {isLogged&&<Navbar.Text>{isLogged.email}</Navbar.Text>}
        {isLogged&&<Nav.Link href="/logout" onClick={logOutFunction}>logout</Nav.Link>}
        {!isLogged&&<Nav.Link href="/login">login</Nav.Link>}
        {!isLogged&&<Nav.Link href="/register">register</Nav.Link>}
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar