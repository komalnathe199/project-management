import React, {useEffect} from 'react'
import './ProjectDashboard.css'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked, faClock, faUsers } from '@fortawesome/free-solid-svg-icons';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer,} from 'recharts';
import DataTable from 'react-data-table-component';
import { faClockFour } from '@fortawesome/free-regular-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';


const data = [
  { name: 'Completed', value: 10 },
  { name: 'Active', value: 8 },
  { name: 'Assigned', value: 5 },
  { name: 'Pending', value: 7 },
  { name: 'In progress', value: 6 },
];

const COLORS = ['#98FB98', '#90EE90', '#8FBC8F', '#32CD32', '#00FF7F'];

// const COLORS = ['#8884d8', '#9c27b0', '#673ab7', '#3f51b5', '#e91e63'];


// task overview

export const data1 = [
  { month: 'Jan', revenue: 4000, projects: 24, activeProjects: 18 },
  { month: 'Feb', revenue: 3000, projects: 18, activeProjects: 14 },
  { month: 'Mar', revenue: 2000, projects: 15, activeProjects: 12 },
  { month: 'Apr', revenue: 2780, projects: 20, activeProjects: 16 },
  { month: 'May', revenue: 1890, projects: 23, activeProjects: 19 },
  { month: 'Jun', revenue: 2390, projects: 21, activeProjects: 17 },
  { month: 'Jul', revenue: 3490, projects: 25, activeProjects: 20 },
];

// teamData
export const teamData = [
  {
    id: 1,
    photo: 'https://via.placeholder.com/150',
    name: 'John Doe',
    designation: 'Project Manager',
    totalHoursLogged: 120,
    totalAssignedTasks: 10
  },
  {
    id: 2,
    photo: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    designation: 'Developer',
    totalHoursLogged: 150,
    totalAssignedTasks: 12
  },
  {
    id: 3,
    photo: 'https://via.placeholder.com/150',
    name: 'Alice Johnson',
    designation: 'Designer',
    totalHoursLogged: 100,
    totalAssignedTasks: 8
  },
  {
    id: 4,
    photo: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    designation: 'Developer',
    totalHoursLogged: 150,
    totalAssignedTasks: 12
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



const ProjectDashboard = () => {
  const columns = [
    {
      name: 'Photo',
      selector: row => <img src={row.photo} alt={row.name} width={50} height={50} style={{ borderRadius: '50%', margin: '6px' }} />,
      sortable: false,
      width: '100px'
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Designation',
      selector: row => row.designation,
      sortable: true
    },
    {
      name: 'Total Hours Logged',
      selector: row => row.totalHoursLogged,
      sortable: true
    },
    {
      name: 'Total Assigned Tasks',
      selector: row => row.totalAssignedTasks,
      sortable: true
    }
  ];


  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section className='project-dashoboard'>
      <div className='title'>
        <h2 className='first-title'>Welcome !</h2>
        <p>Measure How Fast You’re Growing Monthly Recurring Revenue. Learn More</p>
      </div>
      <div className='dashboard-bucket' >
        <Row>
          <Col xxl={2} xl={2} lg={3} md={6} sm={12} xs={12} className='mt-3'>
            <div className='white-bggg'>
              <div className='d-flex justify-content-between'>
                <FontAwesomeIcon icon={faBoxesStacked} />
                <div className='text-end'>
                  <div className='count'>88</div>
                  <p className='bucket-txtt'>Total Projects</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xxl={2} xl={2} lg={3} md={6} sm={12} xs={12} className='mt-3'>
            <div className='white-bggg'>
              <div className='d-flex justify-content-between'>
                <FontAwesomeIcon icon={faBoxesStacked} />
                <div className='text-end'>
                  <div className='count'>52</div>
                  <p className='bucket-txtt'>Active Projects</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xxl={2} xl={2} lg={3} md={6} sm={12} xs={12} className='mt-3'>
            <div className='white-bggg'>
              <div className='d-flex justify-content-between'>
                <FontAwesomeIcon icon={faBoxesStacked} />
                <div className='text-end'>
                  <div className='count'>8</div>
                  <p className='bucket-txtt'>Completed Project</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xxl={2} xl={2} lg={3} md={6} sm={12} xs={12} className='mt-3'>
            <div className='white-bggg'>
              <div className='d-flex justify-content-between'>
                <FontAwesomeIcon icon={faUsers} />
                <div className='text-end'>
                  <div className='count'>100</div>
                  <p className='bucket-txtt'>Members</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xxl={2} xl={2} lg={3} md={6} sm={12} xs={12} className='mt-3'>
            <div className='white-bggg'>
              <div className='d-flex justify-content-between'>
                <FontAwesomeIcon icon={faClockFour} />
                <div className='text-end'>
                  <div className='count'>90</div>
                  <p className='bucket-txtt'>Due Tasks</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xxl={2} xl={2} lg={3} md={6} sm={12} xs={12} className='mt-3'>
            <div className='white-bggg'>
              <div className='d-flex justify-content-between'>
                <FontAwesomeIcon icon={faUsers} />
                <div className='text-end'>
                  <div className='count '>77</div>
                  <p className='bucket-txtt'>Total Clients</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {/* below chart */}
      <Row>
        <Col xl={6} lg={12} md={12} sm={12} xs={12}>
          <div className='white-bgggggg'>
            <p>Issues Summary</p>
            <BarChart
              xAxis={[{ scaleType: 'band', data: ['Fixed Issues', 'New Issues', 'In Progress Issues)',] }]}
              series={[
                { data: [10, 8, 5, ], color: '#FFA500' },
                { data: [6, 6, 8, ], color: '#FF8C00' },
                { data: [2, 5, 6, ], color: '#FF7F50' },
              ]}
              height={400}
            />

          </div>
        </Col>
        <Col xl={6}  lg={12} md={12} sm={12} xs={12}>
          <div className='white-bgggggg'>
            <p>Tasks Overview</p>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={data1}
                margin={{
                  top: 20, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="projects" stroke="#82ca9d" />
                <Line type="monotone" dataKey="activeProjects" stroke="#FF902F" />
              </LineChart>
            </ResponsiveContainer>

          </div>
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={12} data-aos="fade-up"
          data-aos-duration="3000">
          <div className='white-bgggggg' >
            <p>Tasks Performance</p>
            <PieChart width={500} height={400} className='mx-auto'>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name }) => name}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>

          </div>
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={12} data-aos="fade-up"
          data-aos-duration="3000">
          <div className='white-bgggggg'>
            <p>Team Members</p>
            <DataTable
              columns={columns}
              data={teamData}
              customStyles={customStyles}
              pagination
              striped
            />
          </div>
          
        </Col>
       
      </Row>
    </section>
  )
}

export default ProjectDashboard