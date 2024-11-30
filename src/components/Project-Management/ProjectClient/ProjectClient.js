import React, { useState } from 'react'
import './ProjectClient.css'
import { Breadcrumb, Col, Form, Row } from 'react-bootstrap'
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBorderAll, faEllipsisVertical, faPenToSquare, faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons';
import ProjectClientModal from './ProjectClientModal/ProjectClientAddModal';
import ProjectClientEditModal from './ProjectClientModal/ProjectClientEditModal';
import ProjectDeleteClientModal from './ProjectClientModal/ProjectDeleteClientModal';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import ProjectGridView from './ProjectGridView';
import ProjectListView from './ProjectListView';

const options = [
    { value: 'National', label: 'National' },
    { value: 'Indian', label: 'Indian' },
    { value: 'Local', label: 'Local' },
];

const ProjectClient = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(null);
    const [modalShow, setModalShow] = useState(false);


    return (
        <section className='project-add'>
            <div className='d-flex justify-content-between'>
                <div className='main-title'>
                    <h2>Client</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item active>Client</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div>
                    <button className='create-project-btn mt-2' onClick={() => setModalShow(true)} ><FontAwesomeIcon icon={faPlus} className='me-1 mt-1' /> Add Client</button>
                    <ProjectClientModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
            <Row>
                <Col lg={3} md={6} sm={12} xs={12} >
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Client Id" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Control type="text" placeholder="Client Name" />
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
            {/* Gridview */}
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Nav variant="pills" className="flex-row justify-content-end mb-2 ">
                    <Nav.Item>
                        <Nav.Link eventKey="first"><FontAwesomeIcon icon={faBars} /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second"><FontAwesomeIcon icon={faBorderAll} /></Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <ProjectListView />                       
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <ProjectGridView />                       
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </section>
    )
}

export default ProjectClient;
