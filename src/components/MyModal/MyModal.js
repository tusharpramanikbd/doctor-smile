import { Button, Modal } from 'react-bootstrap'

function MyModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Thank you for booking
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Congratulations!!!</h4>
        <p>
          Your booking is successfully reserved. Our office will contact with
          you as soon as possible. Happy Smile...
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MyModal
