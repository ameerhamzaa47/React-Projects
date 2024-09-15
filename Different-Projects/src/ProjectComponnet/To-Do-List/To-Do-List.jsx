import React, { useState } from 'react'
import Header from '../Header'
import TaskTable from './Table'
import { CommonContext } from './CommonContext'

function ToDoList() {
    let [task, setTask] = useState('')
    let [tasks, setTasks] = useState([])

    const taskVal = (e) => {
        setTask(e.target.value)
    }

    function handelTaskVal(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (task.trim() !== '') {
                setTasks([...tasks, task]);
                setTask('')
            }
        }
    }

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };
   
    
    


    return (
        <>
            <CommonContext.Provider value={{ tasks, deleteTask }}>
                <Header />
                <div className='UpperStopWatch'>
                    <h2>To Do List</h2>
                    <div className='col-sm-6 offset-sm-3'>
                        <input className='form-control' type='text' value={task} placeholder='Enter Your Task Here...' onChange={taskVal} onKeyDown={handelTaskVal} />
                        <TaskTable />
                    </div>
                </div>
            </CommonContext.Provider>
        </>
    )
}

export default ToDoList
