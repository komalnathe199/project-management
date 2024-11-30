import { faBoxesStacked, faGear, faHouse, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Accordion, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProjectSideBarMobile = () => {
  return (
      <div className="project-sidebar">
          <Row>
              <Col xl={12}>
                  <Accordion defaultActiveKey={0} >
                      <Link to='/'>
                          <Accordion.Item eventKey="0" className='acoor-dummy'>
                              <Accordion.Header>
                                  <FontAwesomeIcon icon={faHouse} className='me-3' />
                                  <span >Dashboard</span>
                              </Accordion.Header>
                          </Accordion.Item>
                      </Link>

                      <Accordion.Item eventKey="1">
                          <Accordion.Header>
                              <FontAwesomeIcon icon={faUser} className='me-3' />
                              <span >Users</span>
                          </Accordion.Header>
                          <Accordion.Body>
                              <ul>
                                  <Link to='/add-user'><li><a>Add User</a></li></Link>
                                  <Link to='/add-role'> <li><a>Set Permission as per role</a></li></Link>
                              </ul>
                          </Accordion.Body>
                      </Accordion.Item>
                      <Link to='/project-client'>
                          <Accordion.Item eventKey="2" className='acoor-dummy'>
                              <Accordion.Header>
                                  <FontAwesomeIcon icon={faUsers} className='me-3' />
                                  <span >Clients</span>
                              </Accordion.Header>
                          </Accordion.Item>
                      </Link>
                      <Link to='/project-add'>
                          <Accordion.Item eventKey="3" className='acoor-dummy'>
                              <Accordion.Header>
                                  <FontAwesomeIcon icon={faBoxesStacked} className='me-3' />
                                  <span >Projects</span>
                              </Accordion.Header>
                          </Accordion.Item>
                      </Link>
                      <Link to='/project-team'>
                          <Accordion.Item eventKey="4" className='acoor-dummy'>
                              <Accordion.Header>
                                  <FontAwesomeIcon icon={faUsers} className='me-3' />
                                  <span >Team</span>
                              </Accordion.Header>
                          </Accordion.Item>
                      </Link>
                      <Link to='/project-task'>
                          <Accordion.Item eventKey="5" className='acoor-dummy'>
                              <Accordion.Header>
                                  <FontAwesomeIcon icon={faGear} className='me-3' />
                                  <span >Tasks</span>
                              </Accordion.Header>
                          </Accordion.Item>
                      </Link>
                  </Accordion>
              </Col>
          </Row>
      </div>
  )
}

export default ProjectSideBarMobile