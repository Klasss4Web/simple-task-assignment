import React, { useState } from 'react'
import { Button, Form, Row, Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './service/login';

export const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true)
    const payload = {
      email,
      password
    }
    loginUser(payload, setLoading, dispatch, navigate)
  }

  return (
    <Row className="h-100 w-100 align-items-center justify-content-center">
      <Form className="p-5" style={{ width: "50%"}}>
        <small style={{ color: "red", lineHeight: "-2" }}>Alert: Please note that the token for this app expires almost immediately, only one request can be performed per session. You might need to logout and login again to test other features... Thanks</small>
        <h1>Login</h1>
        <Form.Group className="my-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" value={email} onChange={e=>setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="********" value={password} onChange={e=>setPassword(e.target.value)} />
        </Form.Group>
        <Button className="w-100" disabled={!email || !password} onClick={handleLogin}>
       {loading ? (<><Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        /> Loading... </>): "Submit" }</Button>
      </Form>
    </Row>
  )
}
