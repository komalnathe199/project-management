import React, { useState } from 'react'
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Col, Form, Modal, Row, } from 'react-bootstrap'
import Select from 'react-select';

const options = [
    { value: 'Rakhi Deshmukh', label: 'Rakhi Deshmukh' },
    { value: 'Smita Lad', label: 'Smita Lad' },
    { value: 'John Due', label: 'John Due' },
];
const ProjectTeamEdit = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <section >
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                scrollable
                className='project-client-modal'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Team
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Team Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Team Lead</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Email" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Team members</Form.Label>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
                                        isMulti='true'
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Project Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Project Name" />
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
    )
}

export default ProjectTeamEdit