import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './TaskDetailModal.css'

const TaskDetailModal = (props) => {
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter "
            centered
            scrollable
            className='project-client-modal'
        >
            <Modal.Header closeButton>
                {/* <Modal.Title id="contained-modal-title-vcenter">
                  Modal heading
              </Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <h5>1. Check Registration form</h5>
                            <p className='titlte-modal'>Description</p>
                            <p className='user-txtttt'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p className='titlte-modal'>Activity</p>
                            <div>
                                <div className='d-flex'>
                                    <p className='usernameeee me-2'>AK</p>
                                    <p className='me-2 user-txtttt'>Amarendra kumar created the Issue</p>
                                    <p className='date-classs' >5 July 2024 at 18:20</p>
                                </div>
                            </div>
                            <div>
                                <div className='d-flex'>
                                    <p className='usernameeee me-2'>AK</p>
                                    <p className='me-2 user-txtttt'>Amarendra kumar created the Issue</p>
                                    <p className='date-classs' >5 July 2024 at 18:20</p>
                                </div>
                            </div>
                            <div>
                                <div className='d-flex'>
                                    <p className='usernameeee me-2'>AK</p>
                                    <p className='me-2 user-txtttt'>Amarendra kumar created the Issue</p>
                                    <p className='date-classs' >5 July 2024 at 18:20</p>
                                </div>
                            </div>
                            <div>
                                <div className='d-flex'>
                                    <p className='usernameeee me-2'>AK</p>
                                    <p className='me-2 user-txtttt'>Amarendra kumar created the Issue</p>
                                    <p className='date-classs' >5 July 2024 at 18:20</p>
                                </div>
                            </div>
                            <div>
                                <div className='d-flex'>
                                    <p className='usernameeee me-2'>AK</p>
                                    <p className='me-2 user-txtttt'>Amarendra kumar created the Issue</p>
                                    <p className='date-classs' >5 July 2024 at 18:20</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Details</Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col lg={4}>
                                                <p className='user-txtttt-bold'>Assignee</p>
                                            </Col>
                                            <Col lg={8}>
                                                <div className='d-flex'>
                                                    <p className='usernameeee me-2'>AK</p>
                                                    <p className='me-2 user-txtttt'>Amarendra kumar</p>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <p className='user-txtttt-bold'>Priority</p>
                                            </Col>
                                            <Col lg={8}>
                                                <p className='user-txtttt'>High</p>
                                            </Col>
                                            <Col lg={4}>
                                                <p className='user-txtttt-bold'>Due date</p>
                                            </Col>
                                            <Col lg={8}>
                                                <p className='user-txtttt'>08 Jul 2024</p>
                                            </Col>
                                            <Col lg={4}>
                                                <p className='user-txtttt-bold'>Actual end</p>
                                            </Col>
                                            <Col lg={8}>
                                                <p className='user-txtttt'>08 Jul 2024</p>
                                            </Col>
                                            <Col lg={4}>
                                                <p className='user-txtttt-bold'>Actual start</p>
                                            </Col>
                                            <Col lg={8}>
                                                <p className='user-txtttt'>08 Jul 2024</p>
                                            </Col>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    )
}

export default TaskDetailModal