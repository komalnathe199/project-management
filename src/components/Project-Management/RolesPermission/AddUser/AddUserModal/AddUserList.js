import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditUserModal from './EditUserModal';
import DeleteUserModal from './DeleteUserModal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faCircleDot, faLocationDot } from '@fortawesome/free-solid-svg-icons';

// teamData
export const teamData = [
    {
        id: 1,
        photo: '/assets/Image/photos/avatar-14.jpg',
        username: 'John Doe',
        userrole: 'developer',
        email: 'demo@gmail.com',
        mobile: '7896541232',
        status: 'Inactive',
        action: 'edit',
    },
    {
        id: 2,
        photo: '/assets/Image/photos/avatar-13.jpg',
        username: 'John Doe',
        userrole: 'developer',
        email: 'demo@gmail.com',
        mobile: '7896541232',
        status: 'active',
        action: 'edit',
    },
    {
        id: 3,
        photo: '/assets/Image/photos/avatar-18.jpg',
        username: 'John Doe',
        userrole: 'developer',
        email: 'demo@gmail.com',
        mobile: '7896541232',
        status: 'Inactive',
        action: 'edit',
    },
    {
        id: 4,
        photo: '/assets/Image/photos/avatar-19.jpg',
        username: 'John Doe',
        userrole: 'developer',
        email: 'demo@gmail.com',
        mobile: '7896541232',
        status: 'active',
        action: 'edit',
    },
    {
        id: 5,
        photo: '/assets/Image/photos/avatar-18.jpg',
        username: 'John Doe',
        userrole: 'developer',
        email: 'demo@gmail.com',
        mobile: '7896541232',
        status: 'active',
        action: 'edit',
    },
    {
        id: 6,
        photo: '/assets/Image/photos/avatar-18.jpg',
        username: 'John Doe',
        userrole: 'developer',
        email: 'demo@gmail.com',
        mobile: '7896541232',
        status: 'Inactive',
        action: 'edit',
    },
];

const customStyles = {
    headCells: {
        style: {
            fontWeight: "bolder",
            fontSize: "16px",
            borderBottom: "1px solid #000",
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

const AddUserList = () => {
    
    const [editCell, setEditCell] = useState(null); 
    const [editValue, setEditValue] = useState("");

    const [editmodalShow, setEditModalShow] = useState(false);
    const [deletemodalShow, setDeleteModalShow] = useState(false);
    const [data, setData] = useState(teamData);

    const handleStatusChange = (id, newStatus) => {
        const updatedData = data.map(user => {
            if (user.id === id) {
                return { ...user, status: newStatus };
            }
            return user;
        });
        setData(updatedData);
    };

    const columns = [
        {
            name: 'User Image',
            selector: row => (
                <img src={row.photo} alt={row.name} width={50} height={50} style={{ borderRadius: '50%', margin: '6px' }} />
            ),
            sortable: true,
            center: true,
        },
        {
            name: 'User Name',
            selector: row => editCell?.rowId === row.id && editCell?.columnName === 'username' ? (
                <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => {
                        const updatedData = data.map(user => {
                            if (user.id === row.id) {
                                return { ...user, username: editValue };
                            }
                            return user;
                        });
                        setData(updatedData);
                        setEditCell(null);
                    }}
                    autoFocus
                />
            ) : (
                <span onClick={() => {
                    setEditCell({ rowId: row.id, columnName: 'username' });
                    setEditValue(row.username);
                }}>{row.username}</span>
            ),
            sortable: true,
            center: true,
        },
        {
            name: 'User Role',
            selector: row => editCell?.rowId === row.id && editCell?.columnName === 'userrole' ? (
                <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => {
                        const updatedData = data.map(user => {
                            if (user.id === row.id) {
                                return { ...user, userrole: editValue };
                            }
                            return user;
                        });
                        setData(updatedData);
                        setEditCell(null);
                    }}
                    autoFocus
                />
            ) : (
                <span onClick={() => {
                    setEditCell({ rowId: row.id, columnName: 'userrole' });
                    setEditValue(row.userrole);
                }}>{row.userrole}</span>
            ),
            sortable: true,
            center: true,
        },
        {
            name: 'Email',
            selector: row => editCell?.rowId === row.id && editCell?.columnName === 'email' ? (
                <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => {
                        const updatedData = data.map(user => {
                            if (user.id === row.id) {
                                return { ...user, email: editValue };
                            }
                            return user;
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
            center: true,
        },
        {
            name: 'Mobile',
            selector: row => editCell?.rowId === row.id && editCell?.columnName === 'mobile' ? (
                <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => {
                        const updatedData = data.map(user => {
                            if (user.id === row.id) {
                                return { ...user, mobile: editValue };
                            }
                            return user;
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
            center: true,
        },
        {
            name: 'Status',
            center: true,
            selector: row => (
                <select
                    value={row.status}
                    onChange={(e) => handleStatusChange(row.id, e.target.value)}
                    style={{
                        color: row.status === 'active' ? '#55CE63' : 'red',
                        border: '1px solid #ccc',
                        background: 'transparent',
                        padding: '5px 10px',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        borderRadius: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <option value="active" style={{ color: '#55CE63' }}>
                        <FontAwesomeIcon icon={faCircleDot} style={{ color: '#55CE63', marginRight: '5px' }} />
                        Active
                    </option>
                    <option value="Inactive" style={{ color: 'red' }}>
                        <FontAwesomeIcon icon={faCircleDot} style={{ color: 'red', marginRight: '5px' }} />
                        Inactive
                    </option>
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
                    <EditUserModal
                        show={editmodalShow}
                        onHide={() => setEditModalShow(false)}
                    />
                    <DeleteUserModal
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
        <section className='datatable mt-3' data-aos="fade-up"
            data-aos-duration="3000">
            <DataTable
                columns={columns}
                data={data}
                pagination
                customStyles={customStyles}
                conditionalRowStyles={conditionalRowStyles}
            />
        </section>
    )
}

export default AddUserList;
