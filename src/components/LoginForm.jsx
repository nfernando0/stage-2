import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

function LoginForm() {
    return (
        <div className='container'>
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-lg-5">
                    <h1 className='text-center mb-4'>LOGIN</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="******" />
                        </Form.Group>
                        <div className='d-grid'>
                            <Button variant='primary'>Login</Button>
                        </div>
                    </Form>
                    <span className='text-center d-block text-secondary'>Belum punya akun? Klik <Link className='text-text-decoration-none'>disini</Link></span>
                </div>
            </div>
        </div>
    )
}

export default LoginForm