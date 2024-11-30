import React from 'react'
import { Col, Form, Modal, Row, } from 'react-bootstrap'

const ProjectDelete = (props) => {
  return (
      <section >
          <Modal
              {...props}
              size="sm"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              className='project-client-modal'
          >
              <Modal.Body>
                  <div className='text-center'>
                      {/* <h2>Delete Team</h2> */}
                      <p className='mt-3'>Are you sure want to delete?</p>
                  </div>

              </Modal.Body>
              <Modal.Footer>
                  <div className='mx-auto'>
                      <button onClick={props.onHide} className='submit-btn me-2'>Delete</button>
                      <button onClick={props.onHide} className='submit-btn'>Cancel</button>
                  </div>
              </Modal.Footer>
          </Modal>
      </section>
  )
}

export default ProjectDelete