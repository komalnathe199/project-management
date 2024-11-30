import React, { useState } from 'react'
import { Breadcrumb, Col, Form, Row } from 'react-bootstrap'
import ProjectClientModal from '../ProjectClient/ProjectClientModal/ProjectClientAddModal'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from 'react-select';
import AddTaskModal from './ProjectTaskModal/AddTaskModal'
import ProjectTaskTable from './ProjectTaskTable'


const options = [
    { value: 'Recent', label: 'Recent' },
    { value: 'Yesterday', label: 'Yesterday' },
    { value: 'Tommarrow', label: 'Tommarrow' },
];
const ProjectTask = () => {
    const [modalShow, setModalShow] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <section className='project-add'>
            <div className='d-flex justify-content-between'>
                <div className='main-title'>
                    <h2>Task</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/project-dashboard">Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item active>Task</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div>
                    <button className='create-project-btn mt-2' onClick={() => setModalShow(true)} ><FontAwesomeIcon icon={faPlus} className='me-1 mt-1' /> Add Task</button>
                    <AddTaskModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
            <Row>
                <Col lg={3} md={6} sm={12} xs={12}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="by task attcahment" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Control type="text" placeholder="Task Name" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12}>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                    />
                </Col>
                <Col lg={3} md={6} sm={12} xs={12} className='mt-3 mt-md-0'>
                    <button className='search-button'>Search</button>
                </Col>
            </Row>
            <ProjectTaskTable />
        </section>
    )
}

export default ProjectTask