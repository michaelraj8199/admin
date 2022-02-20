import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function EditStudents(props) {
  

  let params = useParams();
  let navigate = useNavigate();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [office, setOffice] = useState("");
  const url = "https://620c98f4b57363259391fb0f.mockapi.io/students/";
 
  // using fetch method 
  // let getData = async () => {
  //   await fetch(url + params.id)
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.lof(err);
  //     });
  // };
  
  //using axios method 
  let getData = async()=>{
    try {
      let response = await axios.get(url+params.id)
      setName(response.data.name);
      setEmail(response.data.email);
      setMobile(response.data.mobile);
      setOffice(response.data.office)

      
    } catch (error) {
         console.log(error)
    }
  }
  // using fetch method 
  // let handleSubmit = async() => {
  //    await fetch(url+params.id,{
  //      method:"PUT",
  //      headers:{
  //        'content-type': 'application/json'
  //      }, 
  //      body:JSON.stringify({
  //        name,
  //        email,
  //        mobile,
  //        office

  //       })
  //     })
  //     .then(response=>response.json())
  //     .then(res=>{
  //         setName(res.name);
  //         setEmail(res.email);
  //         setMobile(res.mobile);
  //         setOffice(res.office)
  //     })
  //     .catch(err=>{
  //         console.log(err)
  //       })


     
     
  // };


  let handleSubmit = async()=>{
    try {
      let response = await axios.put(url+params.id,{  
        name,
         email,
         mobile,
         office
       })
      if (response.status==200)
      {
        navigate('/all-students')
      }
      

    } catch (error) {
      console.log(error)
      
    }
  }



  //  let newdata ={name,email,mobile,office}
  //  let newArray = [...props.data.students];
  //  newArray.splice(params.id.at,1,newdata)
  //  props.data.setStudents(newArray)

  //  console.log(newArray)
  // console.log("Clicked", name,email,mobile,office);


  useEffect(() => {
    getData();
  }, []);

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          value={mobile}
          type="text"
          placeholder="Mobile"
          onChange={(e) => setMobile(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Office</Form.Label>
        <Form.Control
          value={office}
          type="text"
          placeholder="Office"
          onChange={(e) => setOffice(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleSubmit}>
        Update
      </Button>
    </Form>
  );
}

export default EditStudents;
