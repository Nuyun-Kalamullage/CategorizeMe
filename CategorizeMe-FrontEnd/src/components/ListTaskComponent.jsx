import React, {useEffect, useState} from 'react'
import { listTasks } from '../services/TaskService'

const ListTaskComponent = () => {
    const [tasks, setTasks] = useState([])
    useEffect(
        ()=>{
        listTasks().then((response)=>
        {
            setTasks(response.data);
        }).catch(error =>
            {
            console.error(error)
        })
    },
    [])
  return (
    <div className='container'>
        <h2 className='text-center'>List Of Tasks</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Task ID</th>
                    <th>Task Title</th>
                    <th>Task Description</th>
                    <th>Task Category</th>
                    <th>Task Pirority</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map(task =>
                        <tr key={task.id}>
                        <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.category}</td>
                            <td>{task.taskPriority}</td>
                        </tr>
                        )
                }
            </tbody>
        </table>
    </div>
  )

}

export default ListTaskComponent