import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';

const options = [
    { value: 'Frontend', label: 'Frontend' },
    { value: 'Backend', label: 'Backend' },
    { value: 'Tester', label: 'Tester' },
];

const RoleEditModal = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
    const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

    return (
        <section>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                scrollable
                className='project-client-modal'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit User Role
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col lg={4}>
                                <Form.Group className="mb-3" controlId="formUserRole">
                                    <Form.Label>User Role</Form.Label>
                                    <Select
                                        value={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='mt-4'>
                            <Col lg={4}>
                                <Form.Check
                                    type='checkbox'
                                    label='Frontend Developer'
                                />
                                <Form.Check
                                    type='checkbox'
                                    label='Frontend Developer'
                                />
                                <Form.Check
                                    type='checkbox'
                                    label='Frontend Developer'
                                />
                            </Col>
                            <Col lg={4}>
                                <Form.Check
                                    type='checkbox'
                                    label='Frontend Developer'
                                />
                                <Form.Check
                                    type='checkbox'
                                    label='Frontend Developer'
                                />
                                <Form.Check
                                    type='checkbox'
                                    label='Frontend Developer'
                                />
                            </Col>
                            <Col lg={4}>
                                <Form.Check
                                    type='checkbox'
                                    label='Frontend Developer'
                                />
                                <Form.Check
                                    type='checkbox'
                                    label='Frontend Developer'
                                />
                                <Form.Check
                                    type='checkbox'
                                    label='Frontend Developer'
                                />
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

export default RoleEditModal;


