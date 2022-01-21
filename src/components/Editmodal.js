import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const Editmodal=({open,handleClose,updateArray})=>{
    const updateList=(event)=>{
        const updated ={
            title:event.target.taskTitle.value,
            description:event.target.description.value
        }
        {updateArray(updated)}
    }
    return(
        <Modal show={open} >
        <Modal.Header className="title">Update Task</Modal.Header>
        <Form onSubmit={updateList}>
            <FloatingLabel controlId="floatingTextarea" label="Task Title" className="label mb-3">
                <Form.Control as="textarea" placeholder="Task Title" name="taskTitle" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Description" className="label">
                <Form.Control as="textarea" placeholder="Leave a comment here"style={{ height: '100px' }} name="description" />
            </FloatingLabel>
        
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button type="submit" variant="primary" onClick={handleClose}>
                UPdate
                </Button>
            </Modal.Footer>
        </Form>
    </Modal>
    );
}
export default Editmodal;