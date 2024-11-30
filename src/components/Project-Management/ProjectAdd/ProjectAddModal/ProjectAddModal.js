import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { Button, Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';

const ProjectAddModal = (props) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const placeholder = 'Start typing...';
    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder
    }), [placeholder]);

    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { value: 'Local', label: 'Local' },
        { value: 'National ', label: 'National' },
        { value: 'International', label: 'International' },
    ];

    const [selectedPriority, setSelectedPriority] = useState(null);

    const priority = [
        { value: 'Low', label: 'Low' },
        { value: 'Medium ', label: 'Medium' },
        { value: 'High', label: 'High' },
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const project = [
        { value: 'Boomer Bucks', label: 'Boomer Bucks' },
        { value: 'Netpurti ', label: 'Netpurti' },
        { value: 'It Pules', label: 'It Pules' },
    ];

    const [selectedMember, setSelectedMember] = useState(null);
    
    const member = [
        { value: 'Smita Lad', label: 'Smita Lad' },
        { value: 'Rakhi Deshmukh ', label: 'Rakhi Deshmukh' },
        { value: 'Archna Varma', label: 'Archna Varma' },
    ];

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
                        Create Project
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Project Name</Form.Label>
                                    <Select
                                        defaultValue={selectedProject}
                                        onChange={setSelectedProject}
                                        options={project}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Client</Form.Label>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Start Date</Form.Label>
                                    <Form.Control type="date"  />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>End Date</Form.Label>
                                    <Form.Control type="date"  />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Priority </Form.Label>
                                    <Select
                                        defaultValue={selectedPriority}
                                        onChange={setSelectedPriority}
                                        options={priority}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Budget </Form.Label>
                                    <Form.Control type="number" placeholder="Enter Budget" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Team Leader Name </Form.Label>
                                    <Form.Control type="text" placeholder='Enter Team Leader Name' />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Upload Team Leader Image </Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Team Member</Form.Label>
                                    <Select
                                        defaultValue={selectedMember}
                                        onChange={setSelectedMember}
                                        options={member}
                                        isMulti="true"
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Upload Document </Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                            </Col>
                            <Col lg={12}>
                                <Form.Label>Project Description </Form.Label>
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    config={config}
                                    tabIndex={1}
                                    onBlur={newContent => setContent(newContent)}
                                // onChange={newContent => { }}
                                />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <div className='mx-auto'>
                        <Button onClick={props.onHide} className='submit-btn me-2'>
                            <FontAwesomeIcon icon={faFloppyDisk} /> Save
                        </Button>
                        <Button onClick={props.onHide} className='submit-btn'>
                            <FontAwesomeIcon icon={faXmark} /> Cancel
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </section>
    )
}

export default ProjectAddModal