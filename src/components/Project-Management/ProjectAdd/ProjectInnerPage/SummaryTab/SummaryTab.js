import { faCalendarDays, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import StatusViewChart from './StatusViewChart';
import ProgressBar from 'react-bootstrap/ProgressBar';


const summaryData = [
    { icon: faCheck, text: '42 done', description: 'in the last 7 days' },
    { icon: faPencil, text: '49 updated', description: 'in the last 7 days' },
    { icon: faPlus, text: '49 created', description: 'in the last 7 days' },
    { icon: faCalendarDays, text: '6 due', description: 'in the last 7 days' },
];



const SummaryTab = () => {
    const now = 60;
    return (
        <section className='summarytab'>
            <div className='title-summry'>
                <h5>Good morning, Aditya.Jagtap</h5>
                <p>Here's where you'll view a summary of Profcyma Job Portal's status, priorities, workload, and more.</p>
            </div>
            <Container>
                <Row>
                    {summaryData.map((item, index) => (
                        <Col xl={3} lg={4} md={6} sm={12} xs={12} key={index}>
                            <div className='white-bggg'>
                                <div className='d-flex'>
                                    <div className=''>
                                        <FontAwesomeIcon icon={item.icon} className='font-awsome-iconbgg' />
                                    </div>
                                    <div>
                                        <span className='done-txttt'>{item.text}</span>
                                        <p className='common-summary'>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className='white-bggg'>
                            <p className='sub-title-txtt'>Status overview</p>
                            <StatusViewChart />
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className='white-bggg'>
                            <p className='sub-title-txtt'>Recent activity</p>
                            <p className='common-summary'>Stay up to date with what's happening across the project.</p>
                            <div className='white-sub-mainnn '>
                                <span className='span-class'>Yesterday</span>
                                <Row className='mt-2'>
                                    <Col xl={1} lg={2} md={2} sm={2} xs={2}>
                                        <div>
                                            <p className='member-name'>AJ</p>
                                        </div>
                                    </Col>
                                    <Col xl={11} lg={10} md={10} sm={11} xs={10}>
                                        <div>
                                            <p className='common-summary'>Ankur Jain changed the status to Done on PJP-49 - Save contact us form with a resolution of 'Done'</p>
                                            <span className='span-class'>about 17 hours ago</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col xl={1} lg={2} md={2} sm={2} xs={2}>
                                        <div>
                                            <p className='member-name'>AJ</p>
                                        </div>
                                    </Col>
                                    <Col xl={11} lg={10} md={10} sm={11} xs={10}>
                                        <div>
                                            <p className='common-summary'>Ankur Jain changed the status to Done on PJP-49 - Save contact us form with a resolution of 'Done'</p>
                                            <span className='span-class'>about 17 hours ago</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col xl={1} lg={2} md={2} sm={2} xs={2}>
                                        <div>
                                            <p className='member-name'>AJ</p>
                                        </div>
                                    </Col>
                                    <Col xl={11} lg={10} md={10} sm={11} xs={10}>
                                        <div>
                                            <p className='common-summary'>Ankur Jain changed the status to Done on PJP-49 - Save contact us form with a resolution of 'Done'</p>
                                            <span className='span-class'>about 17 hours ago</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col xl={1} lg={2} md={2} sm={2} xs={2}>
                                        <div>
                                            <p className='member-name'>AJ</p>
                                        </div>
                                    </Col>
                                    <Col xl={11} lg={10} md={10} sm={11} xs={10}>
                                        <div>
                                            <p className='common-summary'>Ankur Jain changed the status to Done on PJP-49 - Save contact us form with a resolution of 'Done'</p>
                                            <span className='span-class'>about 17 hours ago</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col xl={1} lg={2} md={2} sm={2} xs={2}>
                                        <div>
                                            <p className='member-name'>AJ</p>
                                        </div>
                                    </Col>
                                    <Col xl={11} lg={10} md={10} sm={11} xs={10}>
                                        <div>
                                            <p className='common-summary'>Ankur Jain changed the status to Done on PJP-49 - Save contact us form with a resolution of 'Done'</p>
                                            <span className='span-class'>about 17 hours ago</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col xl={1} lg={2} md={2} sm={2} xs={2}>
                                        <div>
                                            <p className='member-name'>AJ</p>
                                        </div>
                                    </Col>
                                    <Col xl={11} lg={10} md={10} sm={11} xs={10}>
                                        <div>
                                            <p className='common-summary'>Ankur Jain changed the status to Done on PJP-49 - Save contact us form with a resolution of 'Done'</p>
                                            <span className='span-class'>about 17 hours ago</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col xl={1} lg={2} md={2} sm={2} xs={2}>
                                        <div>
                                            <p className='member-name'>AJ</p>
                                        </div>
                                    </Col>
                                    <Col xl={11} lg={10} md={10} sm={11} xs={10}>
                                        <div>
                                            <p className='common-summary'>Ankur Jain changed the status to Done on PJP-49 - Save contact us form with a resolution of 'Done'</p>
                                            <span className='span-class'>about 17 hours ago</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col xl={1} lg={2} md={2} sm={2} xs={2}>
                                        <div>
                                            <p className='member-name'>AJ</p>
                                        </div>
                                    </Col>
                                    <Col xl={11} lg={10} md={10} sm={11} xs={10}>
                                        <div>
                                            <p className='common-summary'>Ankur Jain changed the status to Done on PJP-49 - Save contact us form with a resolution of 'Done'</p>
                                            <span className='span-class'>about 17 hours ago</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col xl={1} lg={2} md={2} sm={2} xs={2}>
                                        <div>
                                            <p className='member-name'>AJ</p>
                                        </div>
                                    </Col>
                                    <Col xl={11} lg={10} md={10} sm={11} xs={10}>
                                        <div>
                                            <p className='common-summary'>Ankur Jain changed the status to Done on PJP-49 - Save contact us form with a resolution of 'Done'</p>
                                            <span className='span-class'>about 17 hours ago</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>                           
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className='white-bggg p-4'>
                            <p className='sub-title-txtt'>Team Workload</p>
                            <p className='common-summary'>Oversee the capacity of your team. Re-assign tasks across your team</p>
                            <Row>
                                <Col lg={4} md={4} sm={12} xs={12}>
                                    <p className='common-summary mt-2'>Assignee</p>
                                    <Row className='mt-2'>
                                        <Col lg={3} md={3} sm={3} xs={3}>
                                            <div>
                                                <p className='member-name'>AJ</p>
                                            </div>
                                        </Col>
                                        <Col lg={8} md={8} sm={8} xs={8}>
                                            <div>
                                                <p className='common-summary mt-2'>Ankur Jain</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={4} sm={12} xs={12}>
                                    <p className='common-summary mt-2'>Work distribution</p>
                                    <ProgressBar now={now} label={`${now}%`} className='mt-3' />      
                                </Col>
                                <Col lg={4} md={4} sm={12} xs={12} className='text-md-center text-start'>
                                    <p className='common-summary mt-2'>Count</p>
                                    <p className='mt-2'>7</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className='white-bggg p-4'>
                            <p className='sub-title-txtt'>Types of work</p>
                            <p className='common-summary'>Get a breakdown of items by their types. View all items</p>
                            <Row>
                                <Col lg={4} md={4} sm={12} xs={12}>
                                    <p className='common-summary mt-2'>Type</p>
                                    <Row className='mt-2'>
                                        <Col lg={3} md={3} sm={3} xs={3}>
                                            <div>
                                                <p className='member-name'><FontAwesomeIcon icon={faSquareCheck} /></p>
                                            </div>
                                        </Col>
                                        <Col lg={8} md={8} sm={8} xs={8}>
                                            <div>
                                                <p className='common-summary mt-2'>Task</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={4} sm={12} xs={12}>
                                    <p className='common-summary mt-2'>distribution</p>
                                    <ProgressBar now={now} label={`${now}%`} className='mt-3' />
                                </Col>
                                <Col lg={4} md={4} sm={12} xs={12} className='text-md-center text-start'>
                                    <p className='common-summary mt-2'>Count</p>
                                    <p className='mt-2'>7</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default SummaryTab;
