import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseconfig'; //auth ko direct le liya
import { useNavigate } from 'react-router-dom';

function Signup() {
  let Nav = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let SubmitHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password) 
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        localStorage.setItem('user', user.email);
        Nav('/login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode + ',' + errorMessage);
        console.log(errorCode);
      });
  }

  return (
    <div>
      <Form className='m-auto p-5 w-25 shadow mt-5' style={{ backgroundColor: 'chartreuse' }} onSubmit={SubmitHandler}>
        <h1>Signup Form</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name..." value={name} onChange={(e) => { setName(e.target.value) }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
