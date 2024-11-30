import React from 'react';
import './ProjectSidebar.css';
import { Accordion, AccordionBody, Col, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBoxesStacked, faGear, faHouse, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const ProjectSidebar = ({ sidbarclose, closed }) => {
    return (
        <div className="project-sidebar">
            <div className="logo-image-main">
                <div className={`text-center ${closed ? "maintitleclose" : "maintitleopen"} `}>
                    <p className='project-title'><img src={process.env.PUBLIC_URL + "/assets/Image/photos/LOGO_1.png"} className="logo-img" alt="..." /></p>
                </div>
                <div className='white-borderrr'></div>
            </div>
            <div className="brown-border"></div>
            <div className={`${closed ? "mainsidebarclose" : "mainsidebaropen"} `}>
                <Row>
                    <Col xl={12}>
                        <Accordion defaultActiveKey={0}>
                            <Link to='/'>
                                <Accordion.Item eventKey="0" className='acoor-dummy'>
                                    <Accordion.Header>
                                        <FontAwesomeIcon icon={faHouse} className='me-3' />
                                        <span className={`mt-1 ${closed ? "beforeCLicking" : "afterclicking"}`}>Dashboard</span>
                                    </Accordion.Header>
                                </Accordion.Item>
                            </Link>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <FontAwesomeIcon icon={faUser} className='me-4' />
                                    <span className={`mt-1 ${closed ? "beforeCLicking" : "afterclicking"}`}>Users</span>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Accordion defaultActiveKey="01" className={`mt-1 sub-accor ${closed ? "beforeCLicking" : "afterclicking"}`} >
                                        <Link to='/add-user'>
                                            <Accordion.Item eventKey="01" className='acoor-dummy acooordummy-2'>
                                                <Accordion.Header>User List</Accordion.Header>
                                            </Accordion.Item>
                                        </Link>
                                        <Link to='/add-role'>
                                            <Accordion.Item eventKey="02" className='acoor-dummy acooordummy-2'>
                                                <Accordion.Header>Set Permission as per role</Accordion.Header>
                                            </Accordion.Item>
                                         </Link>  
                                        
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Link to='/project-client'>
                                <Accordion.Item eventKey="2" className='acoor-dummy'>
                                    <Accordion.Header>
                                        <FontAwesomeIcon icon={faUsers} className='me-3' />
                                        <span className={`mt-1 ${closed ? "beforeCLicking" : "afterclicking"}`}>Clients</span>
                                    </Accordion.Header>
                                </Accordion.Item>
                            </Link>
                            <Link to='/project-add'>
                                <Accordion.Item eventKey="3" className='acoor-dummy'>
                                    <Accordion.Header>
                                        <FontAwesomeIcon icon={faBoxesStacked} className='me-3' />
                                        <span className={`mt-1 ${closed ? "beforeCLicking" : "afterclicking"}`}>Projects</span>
                                    </Accordion.Header>
                                </Accordion.Item>
                            </Link>
                            <Link to='/project-team'>
                                <Accordion.Item eventKey="4" className='acoor-dummy'>
                                    <Accordion.Header>
                                        <FontAwesomeIcon icon={faUsers} className='me-3' />
                                        <span className={`mt-1 ${closed ? "beforeCLicking" : "afterclicking"}`}>Team</span>
                                    </Accordion.Header>
                                </Accordion.Item>
                            </Link>
                            <Link to='/project-task'>
                                <Accordion.Item eventKey="5" className='acoor-dummy'>
                                    <Accordion.Header>
                                        <FontAwesomeIcon icon={faGear} className='me-3' />
                                        <span className={`mt-1 ${closed ? "beforeCLicking" : "afterclicking"}`}>Tasks</span>
                                    </Accordion.Header>
                                </Accordion.Item>
                                <AccordionBody>
                                </AccordionBody>
                            </Link>
                        </Accordion>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ProjectSidebar;
