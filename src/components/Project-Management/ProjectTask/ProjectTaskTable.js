import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import ProjectDeleteModal from '../ProjectAdd/ProjectAddModal/ProjectDeleteModal';
import EditTaskModal from './ProjectTaskModal/EditTaskModal';
import AOS from 'aos';
import 'aos/dist/aos.css';

// teamData
export const teamData = [
    {
        id: 1,
        key: 'K012345',
        projectname: 'Boomer Bucks',
        tasktitle: 'Registration Form',
        description: 'PRO-ID000 description',
        assigned: 'Disha Marathe',
        duedate: '12-02-2024',
        startdate: '12-02-2024',
        enddate: '12-02-2024',
        priority: 'High',
        status: 'Done',
        taskstatus: 'Active',
        action: 'edit',
    },
    {
        id: 2,
        key: 'K012345',
        projectname: 'Boomer Bucks',
        tasktitle: 'Registration Form',
        description: 'PRO-ID000 description',
        assigned: 'Disha Marathe',
        duedate: '12-02-2024',
        startdate: '12-02-2024',
        enddate: '12-02-2024',
        priority: 'High',
        status: 'In Process',
        taskstatus: 'Active',
        action: 'edit',
    },
    {
        id: 3,
        key: 'K012345',
        projectname: 'Boomer Bucks',
        tasktitle: 'Registration Form',
        description: 'PRO-ID000 description',
        assigned: 'Disha Marathe',
        duedate: '12-02-2024',
        startdate: '12-02-2024',
        enddate: '12-02-2024',
        priority: 'Low',
        status: 'Done',
        taskstatus: 'Inactive',
        action: 'edit',
    },
    {
        id: 4,
        key: 'K012345',
        projectname: 'Boomer Bucks',
        tasktitle: 'Registration Form',
        description: 'PRO-ID000 description',
        assigned: 'Disha Marathe',
        duedate: '12-02-2024',
        startdate: '12-02-2024',
        enddate: '12-02-2024',
        priority: 'High',
        status: 'To Do',
        taskstatus: 'Inactive',
        action: 'edit',
    },
    {
        id: 5,
        key: 'K012345',
        projectname: 'Boomer Bucks',
        tasktitle: 'Registration Form',
        description: 'PRO-ID000 description',
        assigned: 'Disha Marathe',
        duedate: '12-02-2024',
        startdate: '12-02-2024',
        enddate: '12-02-2024',
        priority: 'Medium',
        status: 'In Process',
        taskstatus: 'Inactive',
        action: 'edit',
    },
    {
        id: 6,
        key: 'K012345',
        projectname: 'Boomer Bucks',
        tasktitle: 'Registration Form',
        description: 'PRO-ID000 description',
        assigned: 'Disha Marathe',
        duedate: '12-02-2024',
        startdate: '12-02-2024',
        enddate: '12-02-2024',
        priority: 'Medium',
        status: 'In Process',
        taskstatus: 'Inactive',
        action: 'edit',
    },
    {
        id: 7,
        key: 'K012345',
        projectname: 'Boomer Bucks',
        tasktitle: 'Registration Form',
        description: 'PRO-ID000 description',
        assigned: 'Disha Marathe',
        duedate: '12-02-2024',
        startdate: '12-02-2024',
        enddate: '12-02-2024',
        priority: 'Medium',
        status: 'In Process',
        taskstatus: 'Inactive',
        action: 'edit',
    },
    {
        id: 8,
        key: 'K012345',
        projectname: 'Boomer Bucks',
        tasktitle: 'Registration Form',
        description: 'PRO-ID000 description',
        assigned: 'Disha Marathe',
        duedate: '12-02-2024',
        startdate: '12-02-2024',
        enddate: '12-02-2024',
        priority: 'Medium',
        status: 'In Process',
        taskstatus: 'Inactive',
        action: 'edit',
    },
    {
        id: 9,
        key: 'K012345',
        projectname: 'Boomer Bucks',
        tasktitle: 'Registration Form',
        description: 'PRO-ID000 description',
        assigned: 'Disha Marathe',
        duedate: '12-02-2024',
        startdate: '12-02-2024',
        enddate: '12-02-2024',
        priority: 'Medium',
        status: 'In Process',
        taskstatus: 'Inactive',
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

const getStatusColor = (status) => {
    switch (status) {
        case 'To Do':
            return 'black';
        case 'In Process':
            return 'blue';
        case 'Done':
            return 'green';
        default:
            return 'black';
    }
};

const getPriorityColor = (priority) => {
    switch (priority) {
        case 'Low':
            return '#c4bb0c';
        case 'Medium':
            return '#55CE63';
        case 'High':
            return 'red';
        default:
            return 'black';
    }
};

const ProjectTaskTable = () => {
    const [editModalShow, setEditModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [editingCell, setEditingCell] = useState(null);
    const [tasks, setTasks] = useState(teamData);

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    const handleCellClick = (rowIndex, columnName) => {
        setEditingCell({ rowIndex, columnName });
    };

    const handleInputChange = (e, rowIndex, columnName) => {
        const newData = [...tasks];
        newData[rowIndex][columnName] = e.target.value;
        setTasks(newData);
    };

    const handleInputBlur = () => {
        setEditingCell(null);
    };

    const handlePriorityChange = (index, newPriority) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].priority = newPriority;
        setTasks(updatedTasks);
    };

    const handleStatusChange = (index, newStatus) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].status = newStatus;
        setTasks(updatedTasks);
    };

    const handleTaskStatusChange = (index, newTaskStatus) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].taskstatus = newTaskStatus;
        setTasks(updatedTasks);
    };

    const columns = [
        {
            name: 'Key',
            selector: row => editingCell && editingCell.columnName === 'key' && editingCell.rowIndex === row.id - 1 ?
                <input
                    value={tasks[row.id - 1].key}
                    onChange={(e) => handleInputChange(e, row.id - 1, 'key')}
                    onBlur={handleInputBlur}
                    autoFocus
                /> :
                row.description,
            sortable: true,
            center: true,
            cell: (row, index) => (
                <div onClick={() => handleCellClick(index, 'key')}>
                    {editingCell && editingCell.columnName === 'key' && editingCell.rowIndex === index ?
                        <input
                            value={tasks[index].key}
                            onChange={(e) => handleInputChange(e, index, 'key')}
                            onBlur={handleInputBlur}
                            autoFocus
                        /> :
                        row.key
                    }
                </div>
            ),
        },
        {
            name: 'Project Name',
            selector: row => row.projectname,                
            sortable: true,
            center: true,
        },
        {
            name: 'Task Title',
            selector: row => row.tasktitle,
            sortable: true,
            center: true,
        },
        {
            name: 'Description',
            selector: row => row.description,
            sortable: true,
            center: true,
        },
        {
            name: 'Assigned',
            selector: row => editingCell && editingCell.columnName === 'assigned' && editingCell.rowIndex === row.id - 1 ?
                <input
                    value={tasks[row.id - 1].assigned}
                    onChange={(e) => handleInputChange(e, row.id - 1, 'assigned')}
                    onBlur={handleInputBlur}
                    autoFocus
                /> :
                row.assigned,
            sortable: true,
            center: true,
            cell: (row, index) => (
                <div onClick={() => handleCellClick(index, 'assigned')}>
                    {editingCell && editingCell.columnName === 'assigned' && editingCell.rowIndex === index ?
                        <input
                            value={tasks[index].assigned}
                            onChange={(e) => handleInputChange(e, index, 'assigned')}
                            onBlur={handleInputBlur}
                            autoFocus
                        /> :
                        row.assigned
                    }
                </div>
            ),
        },
        {
            name: 'Priority',
            center: true,
            selector: (row, index) => (
                <select
                    value={row.priority}
                    onChange={(e) => handlePriorityChange(index, e.target.value)}
                    style={{
                        color: getPriorityColor(row.priority),
                        border: '1px solid #ccc',
                        background: 'transparent',
                        padding: '7px 10px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        borderRadius: '50px',
                        fontWeight: '500'
                    }}
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            ),
            sortable: true
        },
        {
            name: 'Due Date',
            center: true,
            selector: row => editingCell && editingCell.columnName === 'duedate' && editingCell.rowIndex === row.id - 1 ?
                <input
                    type="date"
                    value={tasks[row.id - 1].duedate}
                    onChange={(e) => handleInputChange(e, row.id - 1, 'duedate')}
                    onBlur={handleInputBlur}
                    autoFocus
                /> :
                row.duedate,
            sortable: true,
            cell: (row, index) => (
                <div onClick={() => handleCellClick(index, 'duedate')}>
                    {editingCell && editingCell.columnName === 'duedate' && editingCell.rowIndex === index ?
                        <input
                            type="date"
                            value={tasks[index].duedate}
                            onChange={(e) => handleInputChange(e, index, 'duedate')}
                            onBlur={handleInputBlur}
                            autoFocus
                        /> :
                        row.duedate
                    }
                </div>
            ),
        },
        {
            name: 'Start Date',
            center: true,
            selector: row => editingCell && editingCell.columnName === 'startdate' && editingCell.rowIndex === row.id - 1 ?
                <input
                    type="date"
                    value={tasks[row.id - 1].startdate}
                    onChange={(e) => handleInputChange(e, row.id - 1, 'startdate')}
                    onBlur={handleInputBlur}
                    autoFocus
                /> :
                row.startdate,
            sortable: true,
            cell: (row, index) => (
                <div onClick={() => handleCellClick(index, 'startdate')}>
                    {editingCell && editingCell.columnName === 'startdate' && editingCell.rowIndex === index ?
                        <input
                            type="date"
                            value={tasks[index].startdate}
                            onChange={(e) => handleInputChange(e, index, 'startdate')}
                            onBlur={handleInputBlur}
                            autoFocus
                        /> :
                        row.startdate
                    }
                </div>
            ),
        },
        {
            name: 'End Date',
            center: true,
            selector: row => editingCell && editingCell.columnName === 'enddate' && editingCell.rowIndex === row.id - 1 ?
                <input
                    type="date"
                    value={tasks[row.id - 1].enddate}
                    onChange={(e) => handleInputChange(e, row.id - 1, 'enddate')}
                    onBlur={handleInputBlur}
                    autoFocus
                /> :
                row.enddate,
            sortable: true,
            cell: (row, index) => (
                <div onClick={() => handleCellClick(index, 'enddate')}>
                    {editingCell && editingCell.columnName === 'enddate' && editingCell.rowIndex === index ?
                        <input
                            type="date"
                            value={tasks[index].enddate}
                            onChange={(e) => handleInputChange(e, index, 'enddate')}
                            onBlur={handleInputBlur}
                            autoFocus
                        /> :
                        row.enddate
                    }
                </div>
            ),
        },
        {
            name: 'Task Status',
            center: true,
            selector: (row, index) => (
                <select
                    value={row.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                    style={{
                        color: getStatusColor(row.status),
                        border: '1px solid #ccc',
                        background: 'transparent',
                        padding: '5px',
                        fontSize: '14px',
                        fontWeight: '500',
                        borderRadius: '50px',
                        cursor: 'pointer'
                    }}
                >
                    <option value="To Do">To Do</option>
                    <option value="In Process">In Process</option>
                    <option value="Done">Done</option>
                </select>
            ),
            sortable: true
        },
        {
            name: 'Status',
            center: true,
            selector: (row, index) => (
                <select
                    value={row.taskstatus}
                    onChange={(e) => handleTaskStatusChange(index, e.target.value)}
                    style={{
                        color: row.taskstatus === 'Active' ? '#55CE63' : 'red',
                        border: '1px solid #ccc',
                        background: 'transparent',
                        padding: '5px',
                        fontSize: '14px',
                        fontWeight: '500',
                        borderRadius: '50px',
                        cursor: 'pointer'
                    }}
                >
                    <option value="Active">Active</option>
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
                    <EditTaskModal
                        show={editModalShow}
                        onHide={() => setEditModalShow(false)}
                    />
                    <ProjectDeleteModal
                        show={deleteModalShow}
                        onHide={() => setDeleteModalShow(false)}
                    />
                </div>
            ),
            sortable: false
        }
    ];

    const conditionalRowStyles = [
        {
            when: row => row.id % 2 === 0,
            style: {
                backgroundColor: '#f2f2f2',
            },
        },
    ];

    return (
        <section className='datatable mt-4' data-aos="fade-up" data-aos-duration="3000">
            <DataTable
                columns={columns}
                data={tasks}
                pagination
                customStyles={customStyles}
                conditionalRowStyles={conditionalRowStyles}
            />
        </section>
    );
}

export default ProjectTaskTable;
