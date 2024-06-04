import React, { useEffect, useState } from 'react'

export default function LvhListTask({renderLvhListTasks, onLvhEdit}) {
    console.log("List:",renderLvhListTasks);

    const [lvhList, setLvhList]=useState(renderLvhListTasks);
    useEffect(()=>{
        setLvhList(renderLvhListTasks)
        },[renderLvhListTasks]
    )

    //Hàm xử lí dữ liệu edit
    const lvhHandleEdit = (param)=> {
       console.log("Edit",param);
       //chuyển dữ liệu sửa lên app
       onLvhEdit(param);
    }


    //render data
    let lvhElementTask = renderLvhListTasks.map((task, index)=>{
        return(
            <>
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{task.lvh_taskId}</td>
                <td>{task.lvh_taskName}</td>
                <td>{task.lvh_level}</td>
                <td>
                    <button className='btn btn-success' onClick={()=>lvhHandleEdit(task)}>Edit</button>
                    <button className='btn btn-danger'>Remove</button>
                    
                </td>
            </tr>
            </>
        )
    })


  return (
    <div>
        <h2>Danh sách các nhiệm vụ</h2>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>STT</th>
                <th>Task Id</th>
                <th>Task Name</th>
                <th>Task Level</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {lvhElementTask}
        </tbody>
      </table>
    </div>
  )
}
