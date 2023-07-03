import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const EditNote = () => {
  return (
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="EX:Solar System" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Example textarea</Form.Label>
      <Form.Control as="textarea" rows={10} />
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
  </Form>
  )
}

export default EditNote