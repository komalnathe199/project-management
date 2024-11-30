import React, { useState } from 'react'
import './ProjectClient.css'
import { Col, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPenToSquare, faTrashCan,} from '@fortawesome/free-solid-svg-icons';
import ProjectClientEditModal from './ProjectClientModal/ProjectClientEditModal';
import ProjectDeleteClientModal from './ProjectClientModal/ProjectDeleteClientModal';


const clients = [
    {
        id: 1,
        companyName: 'Global Technologies',
        clientName: 'Barry Cuda',
        designation: 'CEO',
        image: '/assets/Image/photos/avatar-06.jpg',
    },
    {
        id: 2,
        companyName: 'Delta Infotech',
        clientName: 'Barry Cuda',
        designation: 'Manager',
        image: '/assets/Image/photos/avatar-07.jpg',
    },
    {
        id: 3,
        companyName: 'Cream Inc',
        clientName: 'Barry Cuda',
        designation: 'Co-Manager',
        image: '/assets/Image/photos/avatar-13.jpg',
    },
    {
        id: 4,
        companyName: 'Wellware Company',
        clientName: 'Barry Cuda',
        designation: 'Director',
        image: '/assets/Image/photos/avatar-14.jpg',
    },
    {
        id: 5,
        companyName: 'Global Technologies',
        clientName: 'Barry Cuda',
        designation: 'CEO',
        image: '/assets/Image/photos/avatar-06.jpg',
    },
    {
        id: 6,
        companyName: 'Delta Infotech',
        clientName: 'Barry Cuda',
        designation: 'Manager',
        image: '/assets/Image/photos/avatar-07.jpg',
    },
    {
        id: 7,
        companyName: 'Cream Inc',
        clientName: 'Barry Cuda',
        designation: 'Co-Manager',
        image: '/assets/Image/photos/avatar-13.jpg',
    },
    {
        id: 8,
        companyName: 'Wellware Company',
        clientName: 'Barry Cuda',
        designation: 'Director',
        image: '/assets/Image/photos/avatar-14.jpg',
    },
];

const ProjectGridView = () => {
    const [dropdownVisible, setDropdownVisible] = useState(null);
    const [editmodalShow, setEditModalShow] = useState(false);
    const [deletemodalShow, setDeleteModalShow] = useState(false);

    const toggleDropdown = (clientId) => {
        setDropdownVisible(dropdownVisible === clientId ? null : clientId);
    };

    return (
        <section >
            {/* Gridview */}
            <Row>
                {clients.map(client => (
                    <Col xl={3} lg={4} md={6} sm={6} xs={12} key={client.id}>
                        <div className='white-bggg'>
                            <div className='text-end'>
                                <FontAwesomeIcon icon={faEllipsisVertical} className='ellips-img' onClick={() => toggleDropdown(client.id)} />
                            </div>
                            {dropdownVisible === client.id && (
                                <div className='drop-down-bgg'>
                                    <p className='client-designation' onClick={() => setEditModalShow(true)} ><FontAwesomeIcon icon={faPenToSquare} /> Edit</p>
                                    <ProjectClientEditModal
                                        show={editmodalShow}
                                        onHide={() => setEditModalShow(false)}
                                    />
                                    <p className='client-designation' onClick={() => setDeleteModalShow(true)}><FontAwesomeIcon icon={faTrashCan} /> Delete</p>
                                    <ProjectDeleteClientModal
                                        show={deletemodalShow}
                                        onHide={() => setDeleteModalShow(false)}
                                    />
                                </div>
                            )}
                            <div>
                                <img src={process.env.PUBLIC_URL + client.image} className="client-img" alt={client.clientName} />
                                <h5 className='company-name'>{client.companyName}</h5>
                                <p className='client-name'>{client.clientName}</p>
                                <span className='client-designation'>{client.designation}</span>
                                {/* <div>
                                    <button className='message-btn me-2'>Message</button>
                                    <button className='message-btn'>View Profile</button>
                                </div> */}
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </section>
    )
}

export default ProjectGridView;
