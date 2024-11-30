import React, { useState, useRef, useMemo } from 'react'
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import JoditEditor from 'jodit-react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import Select from 'react-select';

const options = [
    { value: 'done', label: 'done' },
    { value: 'update', label: 'update' },
    { value: 'to do', label: 'to do' },
];

const options2 = [
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' },
];

const project = [
    { value: 'Chintamani', label: 'Chintamani' },
    { value: 'Autowala', label: 'Autowala' },
    { value: 'Boomer Bucks', label: 'Boomer Bucks' },
    { value: 'Chintamani', label: 'Chintamani' },
    { value: 'Autowala', label: 'Autowala' },
    { value: 'Boomer Bucks', label: 'Boomer Bucks' },
    { value: 'Chintamani', label: 'Chintamani' },
    { value: 'Autowala', label: 'Autowala' },
    { value: 'Boomer Bucks', label: 'Boomer Bucks' },
];

const EditTaskModal = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);

    const editor = useRef(null);
    const [content, setContent] = useState('');
    const placeholder = 'Start typing...';
    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder
    }), [placeholder]);
    return (
        <section >
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='project-client-modal'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create Task
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
                                    <Form.Label>Task Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Assigned To</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Email" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Due Date</Form.Label>
                                    <Form.Control type="date" placeholder="Enter Phone" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Start Date</Form.Label>
                                    <Form.Control type="date" placeholder="Enter Phone" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>End Date</Form.Label>
                                    <Form.Control type="date" placeholder="Enter Phone" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Priority</Form.Label>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options2}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Task Attachement</Form.Label>
                                    <Form.Control type="File" />
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

export default EditTaskModal