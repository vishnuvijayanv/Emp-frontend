import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddEmploye() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button onClick={handleShow} className='btn rounded bg-success' style={{ color: 'white', fontSize: '17px', fontWeight: '700', width: '150px' }}>Add Employee </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'

            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"

                                placeholder="Enter Employee Name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"

                                placeholder="Enter Employee Email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='ms-3'>Gender</Form.Label>
                            <div className='ms-3'>
                                <Form.Check
                                    inline
                                    label="Male"
                                    type="radio"
                                    id="male"
                                    name="gender"
                                />
                                <Form.Check
                                    inline
                                    label="Female"
                                    type="radio"
                                    id="female"
                                    name="gender"
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="date"

                                placeholder="Enter Date of birth"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"

                                placeholder="Enter Employee Designation"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"

                                placeholder="Enter Address"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"

                                placeholder="Enter Phone Number"
                            />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success">Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddEmploye