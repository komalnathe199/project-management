import React, { useState } from 'react'
import './ProjectAdd.css'
import { Col, Form, Row, Dropdown, DropdownButton } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBorderAll, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import ProjectAddModal from './ProjectAddModal/ProjectAddModal';
import CreateGridView from './CreateGridView';
import CreateListView from './CreateListView';

const options = [
    { value: 'Ecommerce', label: 'Ecommerce' },
    { value: 'Banking', label: 'Banking' },
    { value: 'Infomative', label: 'Infomative' },
];
const ProjectAdd = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [modalShow, setModalShow] = useState(false);

    return (
        <section className='project-add'>
            <div className='d-flex justify-content-between'>
                <div className='main-title'>
                    <h2>Projects</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item active>Project</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className=''>
                    <button className='create-project-btn mt-2' onClick={() => setModalShow(true)}><FontAwesomeIcon icon={faPlus} className='me-1 mt-1' /> Create Project</button>
                    <ProjectAddModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
            <Row>
                <Col lg={3} md={6} sm={12} xs={12} >
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            {/* <Form.Label>Project Name</Form.Label> */}
                            <Form.Control type="text" placeholder="Project name" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12} >
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            {/* <Form.Label>Employee Name</Form.Label> */}
                            <Form.Control type="text" placeholder="Team Leader" />
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
                <Col lg={3} md={6} sm={12} xs={12}>
                    <button className='search-button mt-3  mt-md-0' >Search</button>
                </Col>
            </Row>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Nav variant="pills" className="flex-row justify-content-end mb-2 ">
                    <Nav.Item>
                        <Nav.Link eventKey="first"><FontAwesomeIcon icon={faBorderAll} /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second"><FontAwesomeIcon icon={faBars} /></Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <CreateGridView />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <CreateListView />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>

        </section>
    )
}

export default ProjectAdd