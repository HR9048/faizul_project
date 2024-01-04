import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export const Support: React.FC = () => {
return (
  <>
      <Form>
      <Form.Group className="mb-3" controlId="form">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Subject text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="form">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Query text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>
    
    </>
);
};
export default Support;





