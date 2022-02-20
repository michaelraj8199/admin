import "./App.css";
import Siderbar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import AllStudents from "./components/AllStudents";
import AddStudents from "./components/AddStudents";
import Hooks from "./components/Hooks";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import EditStudents from "./components/EditStudents"
import React,{ useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import dashboard from "./components/dashboard";
import { getDefaultNormalizer } from "@testing-library/react";



export const StudentContext = React.createContext("");
// const url = "https://620c98f4b57363259391fb0f.mockapi.io/students/"

function App() {
  let data = {
    earnings: "20000",
    annual: "2,47,500",
    pending: "10",
  };

   

  let [students, setStudents] = useState([])

 
  return (
    <>
      <BrowserRouter>
      <StudentContext.Provider value={(students,setStudents)}>
        <div style={{ display: "grid", gridTemplateColumns: "17% 83%" }}>
          <div>
            <Siderbar />
          </div>
          <div>
            <Routes>  
              <Route path="/dashboard" element={<Dashboard data={data} />}/>
              <Route path="/all-student" element={<AllStudents data={students}/>}/>
              <Route path="/add-student" element={<AddStudents data={{students,setStudents}}/>}/>
              <Route path="edit-student/:id" element={<EditStudents data={{students,setStudents}}/>}/>
              <Route path="/hooks" element={<Hooks/>}/>



              <Route path= '/' element={<Dashboard data ={data}/>}/>
              {/* <Route path="/" element={<Dashboard data={data}/>}/> */}
            </Routes>
          </div>
        </div> 
      </StudentContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
 