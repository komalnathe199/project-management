import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import ProjectDeleteModal from './ProjectAddModal/ProjectDeleteModal';
import ProjectEditModal from './ProjectAddModal/ProjectEditModal';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// teamData
export const teamData = [
  {
    id: 1,
    project: 'Hospital Administration',
    projectid: 'PRO-ID000',
    leader: '/assets/Image/photos/avatar-14.jpg',
    members: [
      '/assets/Image/photos/avatar-14.jpg',
      '/assets/Image/photos/avatar-18.jpg',
      '/assets/Image/photos/avatar-19.jpg',
    ],
    deadline: '12-02-2024',
    priority: 'Medium',
    budget: '4546469',
    status: 'Inactive',
    action: 'edit',
    viewdashboard: 'View Dashboard'
  },
  {
    id: 2,
    project: 'Hospital Administration',
    projectid: 'PRO-ID000',
    leader: '/assets/Image/photos/avatar-14.jpg',
    members: [
       '/assets/Image/photos/avatar-14.jpg',
      '/assets/Image/photos/avatar-18.jpg',
      '/assets/Image/photos/avatar-19.jpg',
    ],
    deadline: '12-02-2024',
    priority: 'Medium',
    budget: '4546469',
    status: 'Inactive',
    action: 'edit',
    viewdashboard: 'View Dashboard'
  },
  {
    id: 3,
    project: 'Hospital Administration',
    projectid: 'PRO-ID000',
    leader: '/assets/Image/photos/avatar-14.jpg',
    members: [
       '/assets/Image/photos/avatar-14.jpg',
      '/assets/Image/photos/avatar-18.jpg',
      '/assets/Image/photos/avatar-19.jpg',
    ],
    deadline: '12-02-2024',
    priority: 'Medium',
    budget: '4546469',
    status: 'Inactive',
    action: 'edit',
    viewdashboard: 'View Dashboard'
  },
  {
    id: 4,
    project: 'Hospital Administration',
    projectid: 'PRO-ID000',
    leader: '/assets/Image/photos/avatar-14.jpg',
    members: [
       '/assets/Image/photos/avatar-14.jpg',
      '/assets/Image/photos/avatar-18.jpg',
      '/assets/Image/photos/avatar-19.jpg',
    ],
    deadline: '12-02-2024',
    priority: 'Medium',
    budget: '4546469',
    status: 'Inactive',
    action: 'edit',
    viewdashboard: 'View Dashboard'
  },
  {
    id: 5,
    project: 'Hospital Administration',
    projectid: 'PRO-ID000',
    leader: '/assets/Image/photos/avatar-14.jpg',
    members: [
       '/assets/Image/photos/avatar-14.jpg',
      '/assets/Image/photos/avatar-18.jpg',
      '/assets/Image/photos/avatar-19.jpg',
    ],
    deadline: '12-02-2024',
    priority: 'Medium',
    budget: '4546469',
    status: 'Inactive',
    action: 'edit',
    viewdashboard: 'View Dashboard'
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

const CreateListView = () => {
  const [editModalShow, setEditModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [editCell, setEditCell] = useState(null);
  const [data, setData] = useState(teamData);

  const handleInputChange = (e, rowIndex, columnName) => {
    const newData = [...data];
    newData[rowIndex][columnName] = e.target.value;
    setData(newData);
  };

  const handleCellClick = (rowIndex, columnName) => {
    setEditCell({ rowIndex, columnName });
  };

  const handleBlur = () => {
    setEditCell(null);
  };

  const handleStatusChange = (index, newStatus) => {
    const newData = [...data];
    newData[index].status = newStatus;
    setData(newData);
  };

  const handlePriorityChange = (index, newPriority) => {
    const newData = [...data];
    newData[index].priority = newPriority;
    setData(newData);
  };

  const getStatusColor = (status) => {
    return status === 'active' ? '#55CE63' : 'red';
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Low':
        return '#cfcb04';
      case 'Medium':
        return '#55CE63';
      case 'High':
        return 'red';
      default:
        return 'black';
    }
  };

  const columns = [
    {
      name: 'Project Name',
      selector: row => editCell && editCell.columnName === 'project' && editCell.rowIndex === row.id - 1 ?
        <input
          value={data[row.id - 1].project}
          onChange={(e) => handleInputChange(e, row.id - 1, 'project')}
          onBlur={handleBlur}
          autoFocus
        /> :
        row.project,
      sortable: true,
      center: true,
      cell: (row, index) => (
        <div onClick={() => handleCellClick(index, 'project')}>
          {editCell && editCell.columnName === 'project' && editCell.rowIndex === index ?
            <input
              value={data[index].project}
              onChange={(e) => handleInputChange(e, index, 'project')}
              onBlur={handleBlur}
              autoFocus
            /> :
            row.project
          }
        </div>
      ),
    },

    {
      name: 'Project Id',
      selector: row => editCell && editCell.columnName === 'projectid' && editCell.rowIndex === row.id - 1 ?
        <input
          value={data[row.id - 1].projectid}
          onChange={(e) => handleInputChange(e, row.id - 1, 'projectid')}
          onBlur={handleBlur}
          autoFocus
        /> :
        row.projectid,
      sortable: true,
      center: true,
      cell: (row, index) => (
        <div onClick={() => handleCellClick(index, 'projectid')}>
          {editCell && editCell.columnName === 'projectid' && editCell.rowIndex === index ?
            <input
              value={data[index].projectid}
              onChange={(e) => handleInputChange(e, index, 'projectid')}
              onBlur={handleBlur}
              autoFocus
            /> :
            row.projectid
          }
        </div>
      ),
    },
    {
      name: 'Team Leader',
      selector: row => <img src={row.leader} alt={row.name} width={40} height={40} style={{ borderRadius: '50%', margin: '6px' }} />,
      sortable: true,
      center: true,
    },
    {
      name: 'Team Members',
      selector: row => (
        <div style={{ display: 'flex',}}>
          {row.members.map((member, index) => (
            <img
              key={index}
              src={member}
              alt={`Member ${index + 1}`}
              width={30}
              height={30}
              style={{ borderRadius: '50%', margin: '6px -3px', flexShrink: 0 }}
            />
          ))}
          <p className='count-number'>4<FontAwesomeIcon icon={faPlus} /></p>
        </div>
      ),
      sortable: true,
      center: true,
    },
    {
      name: 'Deadline',
      selector: row => editCell && editCell.columnName === 'deadline' && editCell.rowIndex === row.id - 1 ?
        <input
          type="date"
          value={data[row.id - 1].deadline}
          onChange={(e) => handleInputChange(e, row.id - 1, 'deadline')}
          onBlur={handleBlur}
          autoFocus
        /> :
        row.deadline,
      sortable: true,
      center: true,
      cell: (row, index) => (
        <div onClick={() => handleCellClick(index, 'deadline')}>
          {editCell && editCell.columnName === 'deadline' && editCell.rowIndex === index ?
            <input
              type="date"
              value={data[index].deadline}
              onChange={(e) => handleInputChange(e, index, 'deadline')}
              onBlur={handleBlur}
              autoFocus
            /> :
            row.deadline
          }
        </div>
      ),
    },
    {
      name: 'Priority',
      center: true,
      selector: (row, index) => (
        <select
          value={data[index].priority}
          onChange={(e) => handlePriorityChange(index, e.target.value)}
          style={{
            color: getPriorityColor(data[index].priority),
            border: '1px solid #ccc',
            background: 'transparent',
            padding: '5px 10px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            borderRadius: '50px',
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
      name: 'Budget',
      selector: row => editCell && editCell.columnName === 'budget' && editCell.rowIndex === row.id - 1 ?
        <input
          type="date"
          value={data[row.id - 1].budget}
          onChange={(e) => handleInputChange(e, row.id - 1, 'budget')}
          onBlur={handleBlur}
          autoFocus
        /> :
        row.budget,
      sortable: true,
      center: true,
      cell: (row, index) => (
        <div onClick={() => handleCellClick(index, 'budget')}>
          {editCell && editCell.columnName === 'budget' && editCell.rowIndex === index ?
            <input
              type="number"
              value={data[index].budget}
              onChange={(e) => handleInputChange(e, index, 'budget')}
              onBlur={handleBlur}
              autoFocus
            /> :
            row.budget
          }
        </div>
      ),
    },
    {
      name: 'Status',
      center: true,
      selector: (row, index) => (
        <select
          value={data[index].status}
          onChange={(e) => handleStatusChange(index, e.target.value)}
          style={{
            color: getStatusColor(data[index].status),
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
          <ProjectEditModal
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
    },
    {
      name: "View Dashboard",
      center: true,
      selector: row => (
        <div className='text-center'>
          <Link to='/project-inner'><FontAwesomeIcon icon={faEye} style={{ cursor: 'pointer', color: '#000' }} /></Link>
        </div>
      ),
      sortable: false
    },
  ];

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className='datatable' data-aos="fade-up" data-aos-duration="3000">
      <DataTable
        columns={columns}
        data={data}
        pagination
        customStyles={customStyles}
        conditionalRowStyles={conditionalRowStyles}
      />
    </section>
  );
}

export default CreateListView;
