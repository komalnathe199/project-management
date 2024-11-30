import React, { useState } from 'react';
import { Col, Form, InputGroup, Row, Navbar, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faArrowRightFromBracket, faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Notification from '../Notification/Notification';
import './ProjectHeader.css';
import ProjectSidebar from '../ProjectSidebar/ProjectSidebar';
import ProjectSideBarMobile from '../ProjectSidebar/ProjectSideBarMobile';

const ProjectHeader = ({sidbarclose,}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [menushow, setMenuShow] = useState(false);

    const handleMenuClose = () => setMenuShow(false);
    const handleMenuShow = () => setMenuShow(true);

    return (
        <div className="project-header">
            <Navbar>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-between">
                    <Form inline className='d-flex'>
                        <FontAwesomeIcon icon={faBarsStaggered} onClick={sidbarclose} className='bar-iconnn me-4 ms-4' />
                        <InputGroup className="ms-3">
                            <InputGroup.Text id="basic-addon1">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="Type here to search"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Form>
                    <Form inline>
                        <Row className="ms-0 me-0">
                            <Col>
                                <div className="notification-main me-3 mt-2" onClick={handleShow}>
                                    <FontAwesomeIcon icon={faBell} className="notification-icon mt-3" />
                                    <div className="number-bg">
                                        <p className="notification-number">7</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs="auto" className="user-image d-flex">
                                <div className="me-2">
                                    <img src={process.env.PUBLIC_URL + "/assets/Image/logo/user.jpg"} className="user-img mt-3" alt="user" />
                                </div>
                                <div className="me-3 mt-3">
                                    <p className="header-text">Hello,<br /> <span>User</span></p>
                                </div>
                            </Col>
                            <Col xs="auto" className="me-4">
                                <Link to='/login'>
                                    <button type="button" className="next-btn-class mt-3">
                                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                    </button>
                                </Link>
                            </Col>
                            {/* mobile view button */}
                            <Col xs="auto" className="mobile-viewbtnnnn me-4">
                                <button type="button" className="next-btn-class mt-3" onClick={handleMenuShow}>
                                    <FontAwesomeIcon icon={faBars} />
                                </button>
                            </Col>
                        </Row>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Notification handleClose={handleClose} show={show} />
            <Offcanvas show={menushow} onHide={handleMenuClose} placement="end" className="menuuu-offcanvas" >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Project Management</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ProjectSideBarMobile />
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default ProjectHeader;
