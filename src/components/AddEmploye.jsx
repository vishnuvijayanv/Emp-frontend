import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { uploadEmpDetails } from '../services/allApi';

function AddEmploye() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [empDetails,setEmpDetails]= useState({
        Name:'',
        Email:'',
        Gender:'',
        Dob:'',
        Designation:'',
        Address:'',
        Phone:'',
        PhotoUrl:'',
    })
    console.log(empDetails);

    const UploadDetails =async()=>{
        const{Name,Email,Gender,Dob,Designation,Address,Phone,PhotoUrl}= empDetails
        if (!Name || !Email || !Gender || !Dob || !Designation || !Address || !Phone || !PhotoUrl) {
            alert("please fill the form completely")
        }
        else{
            
            const response = await uploadEmpDetails(empDetails)
            if (response.status>=200 && response.status<=300) {
                alert("uploaded successfully")
                handleClose()
            }
            else{
                alert('try again later')
            }
        }
    }
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
                        <Form.Group onChange={(e)=>setEmpDetails({...empDetails,Name:e.target.value})} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                name='name'       
                                type="text"
                                placeholder="Enter Employee Name"
                            />
                        </Form.Group>
                        <Form.Group onChange={(e)=>setEmpDetails({...empDetails,Email:e.target.value})} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                name="email"
                                type="text"
                                placeholder="Enter Employee Email"
                            />
                        </Form.Group>
                        <Form.Group onChange={(e)=>setEmpDetails({...empDetails,Gender:e.target.value})} className="mb-3">
                            <Form.Label className='ms-3'>Gender</Form.Label>
                            <div className='ms-3'>
                                <Form.Check
                                    inline
                                    label="Male"
                                    type="radio"
                                    id="male"
                                    value={'male'}
                                    name="gender"
                                />
                                <Form.Check
                                    inline
                                    label="Female"
                                    type="radio"
                                    id="female"
                                    value={'female'}

                                    name="gender"
                                />
                            </div>
                        </Form.Group>
                        <Form.Group onChange={(e)=>setEmpDetails({...empDetails,Dob:e.target.value})} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                name="dob"
                                type="date"
                                placeholder="Enter Date of birth"
                            />
                        </Form.Group>
                        <Form.Group onChange={(e)=>setEmpDetails({...empDetails,Designation:e.target.value})} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                name="designation"
                                type="text"
                                placeholder="Enter Employee Designation"
                            />
                        </Form.Group>
                        <Form.Group onChange={(e)=>setEmpDetails({...empDetails,Address:e.target.value})} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                name="address"
                                type="text"
                                placeholder="Enter Address"
                            />
                        </Form.Group>
                        <Form.Group onChange={(e)=>setEmpDetails({...empDetails,Phone:e.target.value})} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                            name="phone"
                                type="text"
                                placeholder="Enter Phone Number"
                            />
                        </Form.Group>
                        <Form.Group onChange={(e)=>setEmpDetails({...empDetails,PhotoUrl:e.target.value})} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                name="photourl"
                                type="text"
                                placeholder="Enter Employee Photo URL"
                            />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={UploadDetails} variant="success">Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddEmploye