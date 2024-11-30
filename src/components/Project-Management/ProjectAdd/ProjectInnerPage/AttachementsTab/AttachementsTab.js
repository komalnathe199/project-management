import React, { useState } from 'react'
import { Col, Container, Form, Row, Table } from 'react-bootstrap'
import Select from 'react-select';
import Attachments from '../../Animation/empty-attachements/Attachments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


const options = [
  { value: '.pdf', label: '.pdf' },
  { value: '.jpeg', label: '.jpeg' },
  { value: '.png', label: '.png' },
];

const AttachementsTab = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <section>
      <Container>
        <Row>
          <Col lg={3}>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="search attachments" />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={3}>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </Col>
          <Col lg={3}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="file" placeholder="search attachments" />
            </Form.Group>
          </Col>
          <Col lg={3}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="date"  />
            </Form.Group>
          </Col>
        </Row>
        {/* Full Attachements  */}
        <div className='mt-4 text-center'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Task Name</th>
                <th>Attachments</th>
                <th>View</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Jobseeker Reg. Form, Emp. Reg Form, Registration form</td>
                <td><img src={process.env.PUBLIC_URL + "/assest/images/MyWebsite/Help-Center/access.png"} className="banner-img" alt="..." /></td>
                <td>
                  <FontAwesomeIcon icon={faEye} style={{ cursor: 'pointer' }} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faDownload} style={{ cursor: 'pointer' }} />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Employer Section - Get Manage Jobs Section</td>
                <td> <img src={process.env.PUBLIC_URL + "/assest/images/MyWebsite/Help-Center/access.png"} className="banner-img" alt="..." /></td>
                <td>
                  <FontAwesomeIcon icon={faEye} style={{ cursor: 'pointer' }} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faDownload} style={{ cursor: 'pointer' }} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Finance Changes Verification, Responsive (Loan, Finance)</td>
                <td> <img src={process.env.PUBLIC_URL + "/assest/images/MyWebsite/Help-Center/access.png"} className="banner-img" alt="..." /></td>
                <td>
                  <FontAwesomeIcon icon={faEye} style={{ cursor: 'pointer' }} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faDownload} style={{ cursor: 'pointer' }} />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        {/* Empty attachments */}
        <div className='attchements-txtt'>
          <Attachments/>
          <h6>You don't have any attachments yet</h6>
          <p>This is where you'll find any attachments added to issues in this project</p>
        </div>
      </Container>


    </section>
  )
}

export default AttachementsTab