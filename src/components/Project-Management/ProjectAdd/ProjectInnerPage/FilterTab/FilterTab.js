import React, {useState} from 'react'
import { faArrowDownWideShort, faCalendar, faCircleUser, faListUl, faPaperclip, faSearch, faTableCells, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddPeopleModal from '../AddPeopleModal/AddPeopleModal';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';

const FilterTab = () => {

    const [modalShow, setModalShow] = useState(false);

    const [taskmodalShow, setTaskModalShow] = React.useState(false);

    const [showFilter, setShowFilter] = useState(false);

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };
    return (
        <section>
            <div className='board-subbbbb'>
                <Row>
                    <Col lg={5}>
                    </Col>
                    <Col lg={3}>
                        <Form>
                            <Form.Group  controlId="exampleForm.ControlInput1">
                                <InputGroup>
                                    <Form.Control type="text" placeholder="Search Board" />
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </InputGroup.Text>
                                </InputGroup>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col lg={1}>
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
                                        {/* <p className='filter-title mt-3'>Label</p>
                                        <div className='borderrrr'>
                                            <span className='txtttt-demo'>No Label</span>
                                        </div> */}
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
            </div>
        </section>
    )
}

export default FilterTab