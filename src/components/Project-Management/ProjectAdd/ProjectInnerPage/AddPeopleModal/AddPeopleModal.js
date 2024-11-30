import { faArrowRight, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Form, InputGroup, Modal } from 'react-bootstrap';
import Select from 'react-select';
import './AddPeople.css'
import { Link } from 'react-router-dom';


const AddPeopleModal = (props) => {
    const options = [
        { value: 'Frontend Developer', label: 'Frontend Developer' },
        { value: 'Backend Developer', label: 'Backend Developer' },
        { value: 'Tester', label: 'Tester' },
    ];
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            scrollable
            className='project-client-modal'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add People
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name Or Email</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" placeholder="name@example.com" />
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                    <Form.Label>Role</Form.Label>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                    />

                    <Form.Label className='mt-4'>Add Role</Form.Label>
                    <div>
                        <Link to='/add-role'>
                            <FontAwesomeIcon icon={faPlus} className='pluss-iconnn mt-2' />
                        </Link>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default AddPeopleModal