import React, { useState } from 'react'
import { Breadcrumb, Col, Form, Row } from 'react-bootstrap'
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import ProjectClientModal from './ProjectClientModal/ProjectClientAddModal';
// import ProjectClientEditModal from './ProjectClientModal/ProjectClientEditModal';
// import ProjectDeleteClientModal from './ProjectClientModal/ProjectDeleteClientModal';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import ProjectTeamModal from './ProjectTeamModal/ProjectTeamModal';
import ProjectTeamListView from './ProjectTeamListView';


const options = [
    { value: 'Team Leader', label: 'Team Leader' },
    { value: 'Team Name', label: 'Team Name' },
];

const ProjectTeam = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(null);
    const [modalShow, setModalShow] = useState(false);


    return (
        <section className='project-add'>
            <div className='d-flex justify-content-between'>
                <div className='main-title'>
                    <h2>Team</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item active>Team</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div>
                    <button className='create-project-btn mt-2' onClick={() => setModalShow(true)} ><FontAwesomeIcon icon={faPlus} className='me-1 mt-1' /> Create Team</button>
                    <ProjectTeamModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
            <Row>
                <Col lg={3} md={6} sm={12} xs={12}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Team Leader" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Control type="text" placeholder="Team Name" />
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
            {/* Listview */}
            <ProjectTeamListView />
        </section>
    )
}

export default ProjectTeam;
