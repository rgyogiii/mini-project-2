import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form, FloatingLabel } from 'react-bootstrap';
const ModalLogin = (props) => {
  return (
    // <!-- Modal -->
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='border-0' closeButton>
      </Modal.Header>
      <Modal.Body>
      <h1>
        Sign In
      </h1>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control className='border-0 border-bottom rounded-0' type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control className='border-0 border-bottom rounded-0' type="password" placeholder="Password" />
        </FloatingLabel>

        <Button className='btn-lg mt-5 w-100' variant="dark">Sign In</Button>

        <div className='d-flex justify-content-between mt-3'>
          <Form.Check aria-label="option 1" label="Stay signed in?" /> 
          <a href=''>Forgot Password</a>  
        </div>
    
        <div className='text-center mt-3'>
          <a href=''>
            <h6>Can't Sign In <br /> Create Account</h6>
          </a>
        </div>

      </Modal.Body>
    </Modal>
  )
}

export default ModalLogin