import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RoleEditModal from './RoleEditModal';
import AddDeleteRole from './AddDeleteRole';
import AOS from 'aos';
import 'aos/dist/aos.css';

// teamData
export const teamData = [
    {
        id: 1,
        userrole: 'developer',
        status: 'Inactive',
        action: 'edit',
    },
    {
        id: 2,
        userrole: 'developer',
        status: 'active',
        action: 'edit',
    },
    {
        id: 3,
        userrole: 'developer',
        status: 'Inactive',
        action: 'edit',
    },
    {
        id: 4,
        userrole: 'developer',
        status: 'active',
        action: 'edit',
    },
    {
        id: 5,
        userrole: 'developer',
        status: 'Inactive',
        action: 'edit',
    },
    {
        id: 6,
        userrole: 'developer',
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
            '&:nth-of-type(odd)': {
                backgroundColor: '#f2f2f2',
            },
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

const AddRoleList = () => {
    const [editmodalShow, setEditModalShow] = useState(false);
    const [deletemodalShow, setDeleteModalShow] = useState(false);
    const [data, setData] = useState(teamData);
    const [editCell, setEditCell] = useState(null); // { rowId: number, columnName: string }
    const [editValue, setEditValue] = useState("");


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
                    <RoleEditModal
                        show={editmodalShow}
                        onHide={() => setEditModalShow(false)}
                    />
                    <AddDeleteRole
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
            />
        </section>
    )
}

export default AddRoleList;
