import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './ProjectAdd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPenToSquare, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import ProjectDeleteModal from './ProjectAddModal/ProjectDeleteModal';
import ProjectEditModal from './ProjectAddModal/ProjectEditModal';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AddPeopleModal from './ProjectInnerPage/AddPeopleModal/AddPeopleModal';

const CreateGridView = () => {
    const projects = [
        {
            name: "Office Management",
            openTasks: 1,
            completedTasks: 9,
            deadline: "17 Apr 2019",
            progress: 40,
            count: 4,
            leaderImage: `${process.env.PUBLIC_URL}/assets/Image/photos/client.jpg`,
            teamImages: [
                `${process.env.PUBLIC_URL}/assets/Image/photos/avatar-07.jpg`,
                `${process.env.PUBLIC_URL}/assets/Image/photos/client.jpg`,
                `${process.env.PUBLIC_URL}/assets/Image/photos/avatar-13.jpg`
            ]
        },
        {
            name: "Office Management",
            openTasks: 1,
            completedTasks: 9,
            deadline: "17 Apr 2019",
            progress: 40,
            count: 4,
            leaderImage: `${process.env.PUBLIC_URL}/assets/Image/photos/client.jpg`,
            teamImages: [
                `${process.env.PUBLIC_URL}/assets/Image/photos/avatar-07.jpg`,
                `${process.env.PUBLIC_URL}/assets/Image/photos/client.jpg`,
                `${process.env.PUBLIC_URL}/assets/Image/photos/avatar-13.jpg`
            ]
        },
        {
            name: "Office Management",
            openTasks: 1,
            completedTasks: 9,
            deadline: "17 Apr 2019",
            progress: 40,
            count: 4,
            leaderImage: `${process.env.PUBLIC_URL}/assets/Image/photos/client.jpg`,
            teamImages: [
                `${process.env.PUBLIC_URL}/assets/Image/photos/avatar-07.jpg`,
                `${process.env.PUBLIC_URL}/assets/Image/photos/client.jpg`,
                `${process.env.PUBLIC_URL}/assets/Image/photos/avatar-13.jpg`
            ]
        },
        {
            name: "Office Management",
            openTasks: 1,
            completedTasks: 9,
            deadline: "17 Apr 2019",
            progress: 40,
            count: 4,
            leaderImage: `${process.env.PUBLIC_URL}/assets/Image/photos/client.jpg`,
            teamImages: [
                `${process.env.PUBLIC_URL}/assets/Image/photos/avatar-07.jpg`,
                `${process.env.PUBLIC_URL}/assets/Image/photos/client.jpg`,
                `${process.env.PUBLIC_URL}/assets/Image/photos/avatar-13.jpg`
            ]
        },

    ];

    const [dropdownVisibleIndex, setDropdownVisibleIndex] = useState(null);
    const [editModalShow, setEditModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [peopleModalShow, setPeopleModalShow] = useState(false);

    const toggleDropdown = (index) => {
        setDropdownVisibleIndex(dropdownVisibleIndex === index ? null : index);
    };


    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <section className='create-project'>
            <Row>
                {projects.map((project, index) => (
                    <Col xxl={3} xl={4} lg={6} md={12} sm={12} xs={12} key={index} className='mt-3' data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        data-aos-duration="3000">
                        <div className='white-bgggg'>
                            <div className="text-end">
                                <div onClick={() => toggleDropdown(index)}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} className='ellips-img' />
                                </div>
                                {dropdownVisibleIndex === index && (
                                    <div className="drop-down-bgg">
                                        <p className="client-designation" onClick={() => setEditModalShow(true)}>
                                            <FontAwesomeIcon icon={faPenToSquare} /> Edit
                                        </p>
                                        <ProjectEditModal
                                            show={editModalShow}
                                            onHide={() => setEditModalShow(false)}
                                        />
                                        <p className="client-designation" onClick={() => setDeleteModalShow(true)}>
                                            <FontAwesomeIcon icon={faTrashCan} /> Delete
                                        </p>
                                        <ProjectDeleteModal
                                            show={deleteModalShow}
                                            onHide={() => setDeleteModalShow(false)}
                                        />
                                    </div>
                                )}
                            </div>
                            <Link to='/project-inner'>
                                <h4 className='project-name'>{project.name}</h4>
                                <span className='project-txtt mb-2'>{project.openTasks} open tasks, {project.completedTasks} tasks completed</span>
                                <span className='black-project-txtt'>Deadline:</span>
                                <span className='project-txtt'>{project.deadline}</span>
                            </Link>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p className='black-project-txtt mt-3'>Project Leader :</p>
                                    <img src={project.leaderImage} className="client-img" alt="Project Leader" />
                                </div>
                                <div >
                                    <p className='black-project-txtt mt-3'>Team :</p>
                                    <div className='d-flex'>
                                        {project.teamImages.map((image, teamIndex) => (
                                            <img key={teamIndex} src={image} className="client-img" alt="Team Member" />
                                        ))}
                                        <p className='member-count' onClick={() => setPeopleModalShow(true)}>{project.count}<FontAwesomeIcon icon={faPlus} className='plus-iconnjhg' /></p>
                                        <AddPeopleModal
                                            show={peopleModalShow}
                                            onHide={() => setPeopleModalShow(false)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className='black-project-txtt mt-4'>Progress :</p>
                            <ProgressBar now={project.progress} label={`${project.progress}%`} />

                        </div>
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default CreateGridView;
