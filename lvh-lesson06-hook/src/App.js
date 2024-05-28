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

   const lvhHandleSubmit = (lvhParam)=>{
    console.log("App:",lvhParam);
    setLvhlistTasks(prev=>{
      return [...prev, lvhParam]
    
   })
  }
  return (
    <div className="container border">
      <h1>Lê Vinh Huy - K22CNT1</h1>
      <hr/>
      <div>
        {/*Danh sách list task */}
        <LvhListTask renderLvhListTasks = {lvhlistTasks} />
      </div>
      <LvhTaskAddOrEdit lvhOnSubmit={lvhHandleSubmit}/>
    </div>
  );
}

export default App;
