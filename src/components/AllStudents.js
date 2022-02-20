import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import axios  from "axios";
import { StudentContext } from "../App";
const url = "https://620c98f4b57363259391fb0f.mockapi.io/students/"


function AllStudents(props) {
  let context = useContext(StudentContext);
  let[students,setStudents]=useState([])
  // console.log("Context", context);   
   useEffect(()=>{
    getData();

  },[])
  //using fetch method 
  // let getData = async()=>{
  //   await fetch(url)
  //   .then(response=> response.json())
  //   .then(res=>{
      
  //     setStudents(res)


  //   })
  //   .catch(err=>{
  //     console.lof(err)

  //   })

  // }

  let getData = async()=>{
    try {
      let response= await axios.get(url)
    //response is storage data object
      
      // console.log(response.data)
      setStudents(response.data)
      
    } catch (error) {
      console.log(error)
      
    }
    

  }
  //using fetch method 
  // let handleDelete = async(i) => {
  //   console.log("id",i)
  //   await fetch(url+i,
  //     { method: 'DELETE' }
  //   )
  //   .then(response=>response.json())
  //   .then(data=>{
  //     getData()
  //   })
  
  // }

  //using  delete axios method
   let handleDelete = async(i)=>{
     try {
       let response = await axios.delete(url+i)
       if(response.status==200) //using successful code
       getData()
     } catch (error) {
       console.log(error)
       
     }  
   }

  return (
    <>
      {
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>office</th>
            </tr>
          </thead> 
          <tbody>
            {
            students.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.mobile}</td>   
                  <td>{e.office}</td>
                  <td>
                    <Button variant="danger" onClick={()=>handleDelete(e.id)}>Delete</Button>

                    <span>&nbsp;&nbsp;</span>

                    <Link to={`/edit-student/${e.id}`}>
                        <Button variant="primary">Edit</Button>
                    </Link>
                    {/* <Button
                      variant="primary"
                      onClick={() => {
                        "navigate"("/edit-student/" + i);
                      }} */}
                    {/* >
                      Edit
                    </Button> */}
                  </td>
                </tr>
              );
            })}
            {/* {
             props.data.array.forEach(element => {
               
               <tr>
                 <td>1</td>
                 <td>{element.name}</td>
                 <td>{element.email}</td>
                 <td>{element.mobile}</td>
                 <td>{element.office}</td>
               </tr>

               
            }) 
          } */}
          </tbody>
        </Table>
      }
    </>
  );
}

export default AllStudents;
