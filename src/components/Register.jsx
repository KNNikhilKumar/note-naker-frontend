import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row,Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const Register = () => {
const navigate=useNavigate();
const onSubmit=async (e)=>{
    e.preventDefault();
    if(e.target.password.value==e.target.cpassword.value&&e.target.cpassword.value!=""&&e.target.email.value!="")
    {

      const newuser={
        email:e.target.email.value,
        password:e.target.password.value
      };
        const resp=await fetch('http://localhost:8000/register',{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(newuser)
        });
      
        if(resp.status==200)
        {
          localStorage.setItem('user',JSON.stringify(newuser));

          console.log(resp.status);
          navigate('/');
        }
        else
        {
            alert('user already present please login');
        }

    }
    else
    {
      alert('passwords are not matching');
    }
}

  return (
    <Form onSubmit={onSubmit}>
    <Row>
    <Col></Col>
        <Col><h2>Register</h2></Col>
        <Col></Col>
    </Row>
     <Row>
        <Col></Col>
        <Col> 
        <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email"/>
          </Form.Group>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col> 
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password"/>
      </Form.Group>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col> 
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" name="cpassword"/>
      </Form.Group>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
        <Button variant="primary" type="submit">
        Submit
      </Button>
        </Col>
        <Col></Col>
      </Row>

    </Form>
  )
}

export default Register