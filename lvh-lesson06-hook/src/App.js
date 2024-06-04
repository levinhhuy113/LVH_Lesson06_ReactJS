import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import LvhListTask from './components/LvhListTask';
import LvhTaskAddOrEdit from './components/LvhTaskAddOrEdit';

function App() {
  //mock data
  const lvh_listTasks = [
    { lvh_taskId:2210900106,lvh_taskName:"Lê Vinh Huy", lvh_level:"Small" },
    { lvh_taskId:1,lvh_taskName:"Học lập trình frontend", lvh_level:"Small" },
    { lvh_taskId:2, lvh_taskName:"Học lập trình reactjs",lvh_level:"Medium"},
    { lvh_taskId:3, lvh_taskName:"Lập trình với Frontend - Reactjs",lvh_level:"High"},
    { lvh_taskId:4, lvh_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",lvh_level:"Small"},
   ];
   // sử dụng hàm useState để lưu trữ trạng thái dữ liệu
   const [lvhlistTasks, setLvhlistTasks] = useState(lvh_listTasks);
   
    //hàm xử lí đón dữ liệu sửa
    // lưu trữ state
    const task ={lvh_taskId:0,lvh_taskName:"NTU",lvh_level:"Small"}
    const [lvhTask, setLvhTask] = useState(task); // dùng để render form
    

//quản lí trạng thái form khi thêm , sửa
const[lvhAddOrEdit, setLvhAddOrEdit] = useState(false); //Thêm
const lvhHandleEdit = (param)=>{
    setLvhTask(param);
    setLvhAddOrEdit(true);
}

    
const lvhHandleSubmit = (lvhParam) => {
  if (lvhAddOrEdit === false) {
    // khi thêm mới
    setLvhlistTasks((prev) => {
      return [...prev, lvhParam];
    });
  } else {
    // submit khi sửa
    for (let i = 0; i < lvhlistTasks.length; i++) {
      if (lvhlistTasks[i].lvh_taskId == lvhParam.lvh_taskId) {
        lvhlistTasks[i] = lvhParam;
      }
    }
    //  setLvhListTasks(lvhlistTasks);
    setLvhlistTasks((prev) => {
      return [...prev];
    });
  }
};
  

  return (
    <div className="container border">
      <h1>Lê Vinh Huy - K22CNT1</h1>
      <hr/>
      <div>
        {/*Danh sách list task */}
        <LvhListTask renderLvhListTasks = {lvhlistTasks}
                     onLvhEdit={lvhHandleEdit} />
      </div>
      <LvhTaskAddOrEdit lvhOnSubmit={lvhHandleSubmit}
                    renderLvhAddOrEdit = {lvhAddOrEdit}
                    renderLvhTask={lvhTask}/>
    </div>
  );
}

export default App;
