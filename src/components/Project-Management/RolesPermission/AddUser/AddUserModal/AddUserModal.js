import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';

const options = [
    { value: 'Frontend', label: 'Frontend' },
    { value: 'Backend', label: 'Backend' },
    { value: 'Tester', label: 'Tester' },
];

const AddUserModal = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);


    return (
        <section>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='project-client-modal'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="formUserName">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" placeholder="User Name" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="formUserRole">
                                    <Form.Label>User Role</Form.Label>
                                    <Select
                                        value={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="formMobile">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control type="tel" placeholder="Mobile Number" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" />
                                </Form.Group>
                            </Col>
                            <Col lg={12}>
                                <Form.Group className="mb-3" controlId="formConfirmPassword">
                                    <Form.Label>User Image</Form.Label>
                                    <Form.Control
                                        type='file'
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <div className='mx-auto'>
                        <button onClick={props.onHide} className='submit-btn me-2'>
                            <FontAwesomeIcon icon={faFloppyDisk} /> Save
                        </button>
                        <button onClick={props.onHide} className='submit-btn'>
                            <FontAwesomeIcon icon={faXmark} /> Cancel
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </section>
    );
}

export default AddUserModal;
