import React from 'react'
import { Form, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

function RegisterForm() {
    return (
        <div className='container'>
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-lg-5">
                    <h1 className='text-center mb-4'>Register</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="nama">
                            <Form.Label>Nama Lengkap</Form.Label>
                            <Form.Control type="text" placeholder="Nama Lengkap" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="******" />
                        </Form.Group>
                        <div className='d-grid'>
                            <Button variant='primary'>Login</Button>
                        </div>
                    </Form>
                    <span className='text-center d-block text-secondary'>Sudah punya akun? Klik <Link className='text-text-decoration-none' to='/'>disini</Link></span>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm