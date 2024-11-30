import React, { useState } from 'react'
import { faCalendarDays, faClipboard, } from '@fortawesome/free-regular-svg-icons'
import { faArrowDownWideShort, faCalendar, faCircleUser, faListUl, faPaperclip, faSearch, faTableCells, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Breadcrumb, Col, Form, InputGroup, Nav, Row, Tab } from 'react-bootstrap'
import './ProjectInnerPage.css'
import SummaryTab from './SummaryTab/SummaryTab'
import ListTab from './ListTab/ListTab'
import AttachementsTab from './AttachementsTab/AttachementsTab'
import CalendarTab from './CalendarTab/CalendarTab'
import BoardTab from './BoardTab/BoardTab'
import AddPeopleModal from './AddPeopleModal/AddPeopleModal'
import FilterTab from './FilterTab/FilterTab'


const ProjectInnerPage = () => {
    const [modalShow, setModalShow] = useState(false);

    const [taskmodalShow, setTaskModalShow] = React.useState(false);

    const [showFilter, setShowFilter] = useState(false);

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };
    return (
        <section className='project-add project-inner'>
            <div className='main-title mt-4'>
                <h2>Projects Summary</h2>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item href="/project-add">Projects</Breadcrumb.Item>
                    <Breadcrumb.Item active>Project Summary</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col lg={6}>
                        <Nav variant="pills" className="flex-row justify-content-start">
                            <Nav.Item>
                                <Nav.Link eventKey="first"><FontAwesomeIcon icon={faClipboard} className='me-1' /> Dashboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second"><FontAwesomeIcon icon={faTableCells} className='me-1' /> Board</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third"><FontAwesomeIcon icon={faListUl} className='me-1' /> List</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth"><FontAwesomeIcon icon={faCalendarDays} className='me-1' /> Calendar</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth"><FontAwesomeIcon icon={faPaperclip} /> Attachments</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col lg={6}>
                        <FilterTab />
                    </Col>
                </Row>
                <div className='brown-border'></div>
                <Tab.Content className='mt-5'>
                    <Tab.Pane eventKey="first"><SummaryTab /></Tab.Pane>
                    <Tab.Pane eventKey="second"><BoardTab /></Tab.Pane>
                    <Tab.Pane eventKey="third"><ListTab /></Tab.Pane>
                    <Tab.Pane eventKey="fourth"><CalendarTab /></Tab.Pane>
                    <Tab.Pane eventKey="fifth"><AttachementsTab /></Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </section>
    )
}

export default ProjectInnerPage