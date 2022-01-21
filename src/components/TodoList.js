import React ,{useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Horizontalcard from './Card';


const TodoList = ()=>{
    const [show, setShow] = useState(false);
    const [list,setlist] = useState([]);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const createList=(event)=>{
        
        const newTodo={
            title:event.target.taskTitle.value,
            description:event.target.description.value
            
        }
        let temp=list;
        temp.push(newTodo);
        localStorage.setItem("itemList",JSON.stringify(temp));
        
    }
    useEffect(() => {
        let arr= localStorage.getItem("itemList");
        if(arr){
            let obj=JSON.parse(arr);
            setlist(obj)
        }
    }, [])
    const deleteTask=(index)=>{
        let temp=list;
        temp.splice(index,1)
        localStorage.setItem("itemList",JSON.stringify(temp))
        setlist(temp);
        window.location.reload()
    }
    const updateStorage=(obj,index)=>{
        let temp=list;
        temp[index]=obj;
        localStorage.setItem("itemList",JSON.stringify(temp))
        setlist(temp);
    }
    
return(
        <>
            <div className="header text-center">
                <h1>TodoList</h1>
                <button className="btn btn-secondary" onClick = {handleShow}> Create Task </button>
            </div>
            <div className="task-container ">
                
                {list.map((obj , index)=><Horizontalcard title={obj.title} description={obj.description} index={index} deleteTask={deleteTask} updateStorage={updateStorage}/>)}
                
            </div>
            <Modal show={show} >
                <Modal.Header className="title">Create Task</Modal.Header>
                <Form onSubmit={createList}>
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
                        submit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default TodoList;