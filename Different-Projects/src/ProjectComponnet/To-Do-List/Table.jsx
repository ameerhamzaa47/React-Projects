import React, { useContext } from 'react';
import { CommonContext } from './CommonContext';
import { Table } from 'react-bootstrap';
import '../../ProjectComponnet/Style.css';

function TaskTable() {
    const { tasks,deleteTask } = useContext(CommonContext);

    return (
        <>
            <Table>
                <tbody>
                    {tasks.map((item, i) => (
                        <tr key={i}>
                            <td className='rowDesign'>
                                {item}
                                <button onClick={() => deleteTask(i)} className='cross-button'>
                                    <i className='fas fa-xmark'></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default TaskTable;