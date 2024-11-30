import React, { useState, useEffect } from 'react';
import './ProjectClient.css';
import DataTable from 'react-data-table-component';
import ProjectClientEditModal from './ProjectClientModal/ProjectClientEditModal';
import ProjectDeleteClientModal from './ProjectClientModal/ProjectDeleteClientModal';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ProjectListClient from './ProjectClientModal/ProjectListClient';

// teamData
export const teamData = [
    {
        id: 1,
        photo: '/assets/Image/photos/avatar-14.jpg',
        name: 'John Doe',
        clientid: '0123456',
        contactperson: 'abc',
        email: 'demo@gmail.com',
        mobile: '7896541232',
        project: "Project Management",
        status: 'active',
        action: 'edit',
        designation: 'Project Manager',
        totalHoursLogged: 120,
        totalAssignedTasks: 10
    },
    {
        id: 2,
        photo: '/assets/Image/photos/avatar-13.jpg',
        name: 'John Doe',
        clientid: '0123456',
        contactperson: 'abc',
        email: 'demo@gmail.com',
        mobile: '7896541232',
        project: "Project Management",
        status: 'inactive',
        action: 'edit',
        designation: 'Project Manager',
        totalHoursLogged: 120,
        totalAssignedTasks: 10
    },
    {
        id: 3,
        photo: '/assets/Image/photos/avatar-18.jpg',
        name: 'John Doe',
        clientid: '0123456',
        contactperson: 'abc',
        email: 'demo@gmail.com',
        mobile: '7896541232',
        project: "Project Management",
        status: 'active',
        action: 'edit',
        designation: 'Project Manager',
        totalHoursLogged: 120,
        totalAssignedTasks: 10
    },
    {
        id: 4,
        photo: '/assets/Image/photos/avatar-19.jpg',
        name: 'Jane Smith',
        clientid: '0123456',
        contactperson: 'abc',
        email: 'demo@gmail.com',
        mobile: '7896541232',
        project: "Project Management",
        status: 'inactive',
        action: 'edit',
        designation: 'Project Manager',
        totalHoursLogged: 120,
        totalAssignedTasks: 10
    },
    {
        id: 5,
        photo: '/assets/Image/photos/avatar-18.jpg',
        name: 'Jane Smith',
        clientid: '0123456',
        contactperson: 'abc',
        email: 'demo@gmail.com',
        mobile: '7896541232',
        project: "Project Management",
        status: 'active',
        action: 'edit',
        designation: 'Project Manager',
        totalHoursLogged: 120,
        totalAssignedTasks: 10
    },
    {
        id: 6,
        photo: '/assets/Image/photos/avatar-18.jpg',
        name: 'Jane Smith',
        clientid: '0123456',
        contactperson: 'abc',
        email: 'demo@gmail.com',
        mobile: '7896541232',
        project: "Project Management",
        status: 'inactive',
        action: 'edit',
        designation: 'Project Manager',
        totalHoursLogged: 120,
        totalAssignedTasks: 10
    },
];

const customStyles = {
    headCells: {
        style: {
            fontWeight: "bolder",
            fontSize: "16px",
            borderBottom: "1px solid #000",
            textAlign: "center",
            borderRight: "0",
            textAlign: 'center'
        },
    },
    rows: {
        style: {
            backgroundColor: '#ffffff',
            border: '1px solid #000',
            color: "#000",
            borderBottom: "0",
            borderTop: "0",
            borderRight: "0",
            borderLeft: "0",
        },
    },
    cells: {
        style: {
            borderBottom: "0",
            borderTop: "0",
            width: "100%",
            display: "grid",
            borderRight: "0",
            textAlign: 'center'
        },
    },
};

const conditionalRowStyles = [
    {
        when: row => row.id % 2 === 0,
        style: {
            backgroundColor: '#f2f2f2',
        },
    },
];

const ProjectListView = () => {
    const [editmodalShow, setEditModalShow] = useState(false);
    const [deletemodalShow, setDeleteModalShow] = useState(false);
    const [statuses, setStatuses] = useState(teamData.map(client => client.status));
    const [data, setData] = useState(teamData);
    const [editCell, setEditCell] = useState(null);
    const [editValue, setEditValue] = useState("");
    const [modalShow, setModalShow] = React.useState(false);


    const handleStatusChange = (index, newStatus) => {
        const newStatuses = [...statuses];
        newStatuses[index] = newStatus;
        setStatuses(newStatuses);
        teamData[index].status = newStatus;
    };

    const handleEdit = (id) => {
        console.log(`Edit item with id: ${id}`);
    };

    const handleDelete = (id) => {
        console.log(`Delete item with id: ${id}`);
    };

    const columns = [
        {
            name: 'Client Image',
            selector: row => <img src={row.photo} alt={row.name} width={50} height={50} style={{ borderRadius: '50%', margin: '6px' }} />,
            sortable: true,
            center: 'true',
        },
        {
            name: 'Client Name',
            selector: row => editCell?.rowId === row.id && editCell?.columnName === 'name' ? (
                <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => {
                        const updatedData = data.map(client => {
                            if (client.id === row.id) {
                                return { ...client, name: editValue };
                            }
                            return client;
                        });
                        setData(updatedData);
                        setEditCell(null);
                    }}
                    autoFocus
                />
            ) : (
                <span onClick={() => {
                    setEditCell({ rowId: row.id, columnName: 'name' });
                    setEditValue(row.name);
                }}>{row.name}</span>
            ),
            sortable: true,
            center: 'true',
        },
        {
            name: 'Client Id',
            selector: row => editCell?.rowId === row.id && editCell?.columnName === 'clientid' ? (
                <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => {
                        const updatedData = data.map(client => {
                            if (client.id === row.id) {
                                return { ...client, clientid: editValue };
                            }
                            return client;
                        });
                        setData(updatedData);
                        setEditCell(null);
                    }}
                    autoFocus
                />
            ) : (
                <span onClick={() => {
                    setEditCell({ rowId: row.id, columnName: 'clientid' });
                    setEditValue(row.clientid);
                }}>{row.clientid}</span>
            ),
            sortable: true,
            center: 'true',
        },
        {
            name: 'Email',
            selector: row => editCell?.rowId === row.id && editCell?.columnName === 'email' ? (
                <input
                    type="email"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => {
                        const updatedData = data.map(client => {
                            if (client.id === row.id) {
                                return { ...client, email: editValue };
                            }
                            return client;
                        });
                        setData(updatedData);
                        setEditCell(null);
                    }}
                    autoFocus
                />
            ) : (
                <span onClick={() => {
                    setEditCell({ rowId: row.id, columnName: 'email' });
                    setEditValue(row.email);
                }}>{row.email}</span>
            ),
            sortable: true,
            center: 'true',
        },
        {
            name: 'Mobile',
            selector: row => editCell?.rowId === row.id && editCell?.columnName === 'mobile' ? (
                <input
                    type="tel"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => {
                        const updatedData = data.map(client => {
                            if (client.id === row.id) {
                                return { ...client, mobile: editValue };
                            }
                            return client;
                        });
                        setData(updatedData);
                        setEditCell(null);
                    }}
                    autoFocus
                />
            ) : (
                <span onClick={() => {
                    setEditCell({ rowId: row.id, columnName: 'mobile' });
                    setEditValue(row.mobile);
                }}>{row.mobile}</span>
            ),
            sortable: true,
            center: 'true',
        },
        {
            name: 'Project List',
            selector: row => (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {row.project 
                    }
                    <p className='project-count-number ms-1' onClick={() => setModalShow(true)} >1<FontAwesomeIcon icon={faPlus}  /></p>
                    <ProjectListClient
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            ),
            sortable: true,
            center: true,
           
        },
        {
            name: 'Status',
            center: 'true',
            selector: (row, index) => (
                <select
                    value={statuses[index]}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                    style={{
                        color: statuses[index] === 'active' ? '#55CE63' : 'red',
                        border: '1px solid #ccc',
                        background: 'transparent',
                        padding: '5px 10px',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        borderRadius: '50px',
                    }}
                >
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                </select>
            ),
            sortable: true
        },
        {
            name: 'Action',
            center: 'true',
            selector: row => (
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} onClick={() => setEditModalShow(true)} style={{ cursor: 'pointer', marginRight: '10px' }} />
                    <FontAwesomeIcon icon={faTrashCan} onClick={() => setDeleteModalShow(true)} style={{ cursor: 'pointer' }} />
                    <ProjectClientEditModal
                        show={editmodalShow}
                        onHide={() => setEditModalShow(false)}
                    />
                    <ProjectDeleteClientModal
                        show={deletemodalShow}
                        onHide={() => setDeleteModalShow(false)}
                    />
                </div>
            ),
            sortable: false
        }
    ];



    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <section className='datatable' data-aos="fade-up"
            data-aos-duration="3000">
            <DataTable
                columns={columns}
                data={teamData}
                pagination
                customStyles={customStyles}
                conditionalRowStyles={conditionalRowStyles}
            />
        </section>
    )
}

export default ProjectListView;
