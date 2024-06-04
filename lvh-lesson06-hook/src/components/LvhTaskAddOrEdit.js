import React, { useEffect, useState } from 'react'

export default function LvhTaskAddOrEdit({lvhOnSubmit, renderLvhTask, renderLvhAddOrEdit}) {
    console.log("lvhTaskAddOrEdit",renderLvhTask, renderLvhAddOrEdit);
    //Đối tượng task
    const lvhTaskobj ={
        lvh_taskId:0,
        lvh_taskName:"",
        lvh_level:""
    }
    //const [lvhTask, setLvhTask]=useState(lvhTaskobj);
    const [lvhTask, setLvhTask]=useState(renderLvhTask);
    useEffect(()=>{
        setLvhTask(renderLvhTask);
    },[renderLvhTask]);
    console.log("State",lvhTask);

    //Hàm xử lí thay đổi trên điều khiển
    const lvhHandleChange = (lvhEvent) => {
        const name = lvhEvent.target.name;
        const value = lvhEvent.target.value;
        setLvhTask(prev=>{
            return{
               ...prev,
                [name]:value
            }
           
        })
        
    }
   const lvhHandleSubmit = (lvhEvent) => {
    lvhEvent.preventDefault();
    lvhOnSubmit(lvhTask);
   } 


   const lvhTitle=renderLvhAddOrEdit===false?"Thêm mới task":"Sửa task"
  return (
    <div>
    <h2>{lvhTitle}</h2>
      <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Task ID</span>
            <input type="text" 
                name='lvh_taskId' value={lvhTask.lvh_taskId} onChange={lvhHandleChange} 
                className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Task Name</span>
            <input type="text" 
                name='lvh_taskId' value={lvhTask.lvh_taskName} onChange={lvhHandleChange} 
                className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div>
            <label>Task Level</label>
            <select name='lvh_level' value={lvhTask.lvh_level} onChange={lvhHandleChange}>
                <option value={'Small'}>Small</option>
                <option value={'Medium'}>Medium</option>
                <option value={'High'}>High</option>
              
            </select>
        </div>
        <button onClick={lvhHandleSubmit}>Ghi lại</button>
      </form>
    </div>
  )
   }
