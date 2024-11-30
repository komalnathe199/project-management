import React from 'react'
import { Col, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ProjectListClient = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='project-client-modal'
            scrollable
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h4>Projects</h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <Row>
                        <Col md={9}>
                            <p>1. Project Management (Admin-panel) </p>
                        </Col>
                        <Col md={3}>
                            <Link to='/project-inner'>
                                <button className='go-to-project'>Go to project</button>
                            </Link>
                        </Col>
                        <Col md={9}>
                            <p className='mt-4'>2. Project Management (Admin-panel) </p>
                        </Col>
                        <Col md={3}>
                            <Link to='/project-inner'>
                                <button className='go-to-project mt-4'>Go to project</button>
                            </Link>
                        </Col>
                        <Col md={9}>
                            <p className='mt-4'>3. Project Management (Admin-panel) </p>
                        </Col>
                        <Col md={3}>
                            <Link to='/project-inner'>
                                <button className='go-to-project mt-4'>Go to project</button>
                            </Link>
                        </Col>
                        <Col md={9}>
                            <p className='mt-4'>4. Project Management (Admin-panel) </p>
                        </Col>
                        <Col md={3}>
                            <Link to='/project-inner'>
                                <button className='go-to-project mt-4'>Go to project</button>
                            </Link>
                        </Col>
                        <Col md={9}>
                            <p className='mt-4'>5. Project Management (Admin-panel) </p>
                        </Col>
                        <Col md={3}>
                            <Link to='/project-inner'>
                                <button className='go-to-project mt-4'>Go to project</button>
                            </Link>
                        </Col>
                    </Row>

                </div>
            </Modal.Body>
            {/* <Modal.Footer>
                <div className='mx-auto'>
                    <button onClick={props.onHide} className='submit-btn'>Cancel</button>
                </div>
            </Modal.Footer> */}
        </Modal>
    )
}

export default ProjectListClient