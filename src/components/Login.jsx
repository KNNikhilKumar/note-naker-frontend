import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row,Col} from 'react-bootstrap';
const Login = () => {
  return (
    <Form>
    <Row>
    <Col></Col>
        <Col><h2>Login</h2></Col>
        <Col></Col>
    </Row>
     <Row>
        <Col></Col>
        <Col> 
        <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col> 
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"/>
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

export default Login