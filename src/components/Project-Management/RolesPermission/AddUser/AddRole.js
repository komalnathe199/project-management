import React, { useState } from 'react'
import { Col, Form, Row,} from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddRoleList from './AddRoleModal/AddRoleList';
import AddRoleModal from './AddRoleModal/AddRoleModal';



const options = [
    { value: 'Frontend Devloper', label: 'Frontend Devloper' },
    { value: 'Backend Devloper', label: 'Backend Devloper' },
    { value: 'Python Devloper', label: 'Python Devloper' },
];
const AddRole = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [modalShow, setModalShow] = useState(false);

    return (
        <section className='project-add'>
            <div className='d-flex justify-content-between'>
                <div className='main-title'>
                    <h2>User Role</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item active>User Role</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className=''>
                    <button className='create-project-btn mt-2' onClick={() => setModalShow(true)}><FontAwesomeIcon icon={faPlus} className='me-1 mt-1' /> Add User Role</button>
                    <AddRoleModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
            <Row>
                <Col lg={3} md={6} sm={12} xs={12} >
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="User Role" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12} >
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Control type="text" placeholder="Role Name" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12}>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                    />
                </Col>
                <Col lg={3} md={6} sm={12} xs={12} className='mt-3 mt-md-0'>
                    <button className='search-button'>Search</button>
                </Col>
            </Row>
            <Row>
                <AddRoleList />
            </Row>

        </section>
    )
}

export default AddRole