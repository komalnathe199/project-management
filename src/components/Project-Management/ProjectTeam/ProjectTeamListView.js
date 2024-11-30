import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import ProjectTeamEdit from './ProjectTeamModal/ProjectTeamEdit';
import ProjectDelete from './ProjectTeamModal/ProjectDelete';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Plus } from 'react-bootstrap-icons';
import AddPeopleModal from '../ProjectAdd/ProjectInnerPage/AddPeopleModal/AddPeopleModal';

// Updated teamData with multiple members images
export const teamData = [
    {
        id: 1,
        teamname: 'Frontend Team',
        leader: '/assets/Image/photos/avatar-14.jpg',
        members: [
            '/assets/Image/photos/avatar-14.jpg',
            '/assets/Image/photos/avatar-18.jpg',
            '/assets/Image/photos/avatar-19.jpg',
        ],
        status: 'active',
        action: 'edit',
    },
    {
        id: 1,
        teamname: 'Frontend Team',
        leader: '/assets/Image/photos/avatar-14.jpg',
        members: [
            '/assets/Image/photos/avatar-14.jpg',
            '/assets/Image/photos/avatar-18.jpg',
            '/assets/Image/photos/avatar-19.jpg',
        ],
        status: 'Inactive',
        action: 'edit',
    },
    {
        id: 1,
        teamname: 'Frontend Team',
        leader: '/assets/Image/photos/avatar-14.jpg',
        members: [
            '/assets/Image/photos/avatar-14.jpg',
            '/assets/Image/photos/avatar-18.jpg',
            '/assets/Image/photos/avatar-19.jpg',
        ],
        status: 'Inactive',
        action: 'edit',
    },
    {
        id: 1,
        teamname: 'Frontend Team',
        leader: '/assets/Image/photos/avatar-14.jpg',
        members: [
            '/assets/Image/photos/avatar-14.jpg',
            '/assets/Image/photos/avatar-18.jpg',
            '/assets/Image/photos/avatar-19.jpg',
        ],
        status: 'active',
        action: 'edit',
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

const ProjectTeamListView = () => {
    const [editModalShow, setEditModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [peopleModalShow, setPeopleModalShow] = useState(false);
    const [editingCell, setEditingCell] = useState(null);
    const [editableData, setEditableData] = useState(teamData);

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    const handleCellClick = (rowIndex, columnName) => {
        setEditingCell({ rowIndex, columnName });
    };

    const handleInputChange = (e, rowIndex, columnName) => {
        const newData = [...editableData];
        newData[rowIndex][columnName] = e.target.value;
        setEditableData(newData);
    };

    const handleInputBlur = () => {
        setEditingCell(null);
    };

    const columns = [
        {
            name: 'Team name',
            selector: row => row.teamname,
            sortable: true,
            center: true
        },
        {
            name: 'Team Leader',
            selector: row => <img src={row.leader} alt={row.teamname} width={40} height={40} style={{ borderRadius: '50%', margin: '6px' }} />,
            sortable: true,
            center: true,
        },
        {
            name: 'Team Members',
            selector: row => (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {row.members.map((member, index) => (
                        <img
                            key={index}
                            src={member}
                            alt={`Member ${index + 1}`}
                            width={30}
                            height={30}
                            style={{ borderRadius: '50%', margin: '6px -2px' }}
                        />
                    ))}
                    <p className='count-number' onClick={() => setPeopleModalShow(true)}>4<FontAwesomeIcon icon={faPlus} /></p>
                    <AddPeopleModal
                        show={peopleModalShow}
                        onHide={() => setPeopleModalShow(false)}
                    />
                </div>
            ),
            sortable: true,
            center: true,
        },
        {
            name: 'Status',
            center: true,
            selector: (row, index) => (
                <select
                    value={editableData[index].status}
                    onChange={(e) => handleInputChange(e, index, 'status')}
                    onBlur={handleInputBlur}
                    style={{
                        color: editableData[index].status === 'active' ? '#55CE63' : 'red',
                        border: '1px solid #ccc',
                        background: 'transparent',
                        padding: '5px 10px',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        borderRadius: '50px',
                    }}
                >
                    <option value="active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            ),
            sortable: true
        },
        {
            name: 'Action',
            center: true,
            selector: row => (
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} onClick={() => setEditModalShow(true)} style={{ cursor: 'pointer', marginRight: '10px' }} />
                    <FontAwesomeIcon icon={faTrashCan} onClick={() => setDeleteModalShow(true)} style={{ cursor: 'pointer' }} />
                    <ProjectTeamEdit
                        show={editModalShow}
                        onHide={() => setEditModalShow(false)}
                    />
                    <ProjectDelete
                        show={deleteModalShow}
                        onHide={() => setDeleteModalShow(false)}
                    />
                </div>
            ),
            sortable: false
        }
    ];

    return (
        <section className='datatable mt-3' data-aos="fade-up" data-aos-duration="2000">
            <DataTable
                columns={columns}
                data={editableData}
                pagination
                customStyles={customStyles}
                conditionalRowStyles={conditionalRowStyles}
            />
        </section>
    );
}

export default ProjectTeamListView;
