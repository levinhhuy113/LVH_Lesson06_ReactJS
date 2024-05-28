import React, { useState } from 'react'

export default function LvhTaskAddOrEdit({lvhOnSubmit}) {
    
    //Đối tượng task
    const lvhTaskobj ={
        lvh_taskId:0,
        lvh_taskName:"",
        lvh_level:""
    }
    const [lvhTask, setLvhTask]=useState(lvhTaskobj);
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
  return (
    <div>
      <h2>Thêm mới task</h2>
      <form>
        <div>
            <label>Task ID</label>
            <input name='lvh_taskId' value={lvhTask.lvh_taskId} onChange={lvhHandleChange} />
        </div>
        <div>
            <label>Task Name</label>
            <input name='lvh_taskName' value={lvhTask.lvh_taskName} onChange={lvhHandleChange} />
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
