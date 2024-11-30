import React, { useState } from 'react'
import { faCalendar, faCalendarDays, faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Form, Row, InputGroup } from 'react-bootstrap'
import { faArrowDownWideShort, faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import AddPeopleModal from '../AddPeopleModal/AddPeopleModal';
import TaskDetailModal from '../TaskDetailModal/TaskDetailModal';

const BoardTab = () => {
    const [modalShow, setModalShow] = useState(false);

    const [taskmodalShow, setTaskModalShow] = React.useState(false);

    const [showFilter, setShowFilter] = useState(false);

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };
    return (
        <section className='boardtab' >
            {/* <div className='board-subbbbb'>
                <Row>
                    <Col lg={2}>
                        <Form>
                            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                                <InputGroup>
                                    <Form.Control type="text" placeholder="Search Board" />
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </InputGroup.Text>
                                </InputGroup>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col lg={7}>
                        <FontAwesomeIcon icon={faUserPlus} className='plususername' onClick={() => setModalShow(true)} />
                        <AddPeopleModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Col>
                    <Col lg={3}>
                        <div className='mainnnnnn-filterrrr'>
                            <div className='text-end'>
                                <button className='filter-btnnn' onClick={toggleFilter}>
                                    <FontAwesomeIcon icon={faArrowDownWideShort} /> Filter
                                </button>
                            </div>
                            {showFilter && (
                                <div className='main-class-board'>
                                    <div className='dark-brown'>
                                        <p className='todo-task-txtt'>Filter</p>
                                    </div>
                                    <div className='fliter-sub'>
                                        <div className='d-flex mt-3'>
                                            <FontAwesomeIcon icon={faCircleUser} className='me-2' />
                                            <p className='txtttt-demo'>Assigned To me</p>
                                        </div>
                                        <div className='d-flex'>
                                            <FontAwesomeIcon icon={faCalendar} className='me-2' />
                                            <p className='txtttt-demo'>Due This Week</p>
                                        </div>
                                        <div className='light-brown mb-3'></div>
                                        <p className='filter-title'>Assignee</p>
                                        <div className='d-flex'>
                                            <p className='green-bggg'>MZ</p>
                                            <p className='pink-bggg'>NK</p>
                                            <p className='yellow-bggg'>AK</p>
                                            <p className='black-bggg'>AJ</p>
                                            <p className='blue-bggg'>MZ</p>
                                        </div>
                                        <p className='filter-title mt-3'>CATEGORY</p>
                                        <div>
                                            <Form>
                                                <div className='borderrrr'>
                                                    <Form.Check
                                                        type='checkbox'
                                                        label='No Category'
                                                    />
                                                </div>
                                            </Form>
                                        </div>
                                        <p className='filter-title mt-3'>ISSUE TYPE</p>
                                        <div>
                                            <Form>
                                                <div className='borderrrr'>
                                                    <Form.Check
                                                        type='checkbox'
                                                        label='Task'
                                                    />
                                                </div>
                                            </Form>
                                        </div>
                                        <p className='filter-title mt-3'>STATUS</p>
                                        <div className='d-flex'>
                                            <div className='borderrrr me-2'>
                                                <Form.Check
                                                    type='checkbox'
                                                    label='Done'
                                                    className='green-txttt'
                                                />
                                            </div>
                                            <div className='borderrrr me-2'>
                                                <Form.Check
                                                    type='checkbox'
                                                    label='In Progress'
                                                    className='inprogress-txttt'
                                                />
                                            </div>
                                            <div className='borderrrr'>
                                                <Form.Check
                                                    type='checkbox'
                                                    label='To Do'
                                                    className='todo-txtttt'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>    
            </div> */}
            <Row>
                <Col lg={3}>
                    <div className='main-class-board'>
                        <div className='dark-brown'>
                            <p className='todo-task-txtt'>To Do <span className='count'>(0)</span></p>
                        </div>
                        <div className='sub-main'>
                            <div className='brown-bggg' onClick={() => setTaskModalShow(true)}>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>   
                                    <span className='usernameee'  >AJ</span>
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                    
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                    
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                    
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                    
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                    
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>                                    
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>                                    
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                    
                                </div>
                            </div>

                        </div>

                    </div>

                </Col>
                <Col lg={3}>
                    <div className='main-class-board'>
                        <div className='dark-brown'>
                            <p className='inprogress-txtt'>In Progress <span className='count'> (0)</span></p>
                        </div>
                        <div className='sub-main'>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                    
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                    
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                    
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                    
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                    
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                    
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className='main-class-board'>
                        <div className='dark-brown'>
                            <p className='done-txttt'>Done <span className='count'>(0)</span></p>
                        </div>
                        <div className='sub-main'>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                </div>
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                </div>
                                <TaskDetailModal
                                    show={taskmodalShow}
                                    onHide={() => setTaskModalShow(false)}
                                />
                            </div>
                            <div className='brown-bggg'>
                                <p>1. Check Registration Form</p>
                                <span><FontAwesomeIcon icon={faCalendarDays} className='me-2' />08 JUL</span>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='pjp-txttt'>Key-01234</span>
                                    <span className='usernameee' onClick={() => setTaskModalShow(true)} >AJ</span>
                                </div>
                            </div>

                        </div>

                    </div>

                </Col>
            </Row>
            <TaskDetailModal
                show={taskmodalShow}
                onHide={() => setTaskModalShow(false)}
            />

        </section>
    )
}

export default BoardTab