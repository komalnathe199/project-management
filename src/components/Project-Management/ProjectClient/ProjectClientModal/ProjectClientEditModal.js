import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './ProjectClientModal.css'
import Table from 'react-bootstrap/Table';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';


const options = [
    { value: 'Boomer Bucks', label: 'Boomer Bucks' },
    { value: 'Auto Wala', label: 'Project Management' },
    { value: 'It pules', label: 'It pules' },
    { value: 'Boomer Bucks', label: 'Boomer Bucks' },
];

const ProjectClientEditModal = (props) => {
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
                        Add Client
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Client Image</Form.Label>
                                    <Form.Control type="file" placeholder="Enter Name" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Client Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="tel" placeholder="Enter Phone" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Company Name" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Project Name</Form.Label>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                    <div className='brown-border'></div>
                    <div className='text-center'>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr >
                                    <th>Module Permission</th>
                                    <th>Read</th>
                                    <th>Write</th>
                                    <th>Create</th>
                                    <th>Delete</th>
                                    <th>Import</th>
                                    <th>Export</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Project</td>
                                    <td>
                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                            />
                                        </Form>
                                    </td>
                                    <td>
                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                            />
                                        </Form>
                                    </td>
                                    <td>
                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                            />
                                        </Form>
                                    </td>
                                    <td>
                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                            />
                                        </Form>
                                    </td>
                                    <td>
                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                            />
                                        </Form>
                                    </td>
                                    <td>
                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                            />
                                        </Form>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Task</td>
                                    <td>
                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                            />
                                        </Form>
                                    </td>
                                    <td>
                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                            />
                                        </Form>
                                    </td>
                                    <td>
                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                            />
                                        </Form>
                                    </td>
                                    <td>
                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                            />
                                        </Form>
                                    </td>
                                    <td>
                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                            />
                                        </Form>
                                    </td>
                                    <td>
                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                            />
                                        </Form>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Timing Sheet</td>
                                    <td>
                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                            />
                                        </Form>
                                    </td>
                                    <td>
                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                            />
                                        </Form>
                                    </td>
                                    <td>
                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                            />
                                        </Form>
                                    </td>
                                    <td>
                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                            />
                                        </Form>
                                    </td>
                                    <td>
                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                            />
                                        </Form>
                                    </td>
                                    <td>
                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                            />
                                        </Form>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
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

export default ProjectClientEditModal