import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
// import { FormFloating } from "react-bootstrap";

function AddStudents(props) {
  let navigate = useNavigate();

  // let [name, setName] = useState("");
  // let [email, setEmail] = useState("");
  // let [mobile, setMobile] = useState("");
  // let [office, setOffice] = useState("");
  const Url = "https://620c98f4b57363259391fb0f.mockapi.io/students/";

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      mobile: "",
      office: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Required"),
      email: yup.string().email("Invalid Email").required("Required"),
      mobile: yup
        .string()
        .matches(/^\d{10}$/, "Mobile number  not valid")
        .required("Required"),
      office: yup.string(),
      password: yup
        .string()
        .required("no password provided")
        .min(8, "password is too short")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain  One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  //using fetch method post
  // let handleSubmit = async() => {
  //   await fetch(Url,{
  //     method:"POST",
  //     headers:{
  //       'content-type': 'application/json'
  //     },
  //     body:JSON.stringify({
  //       name,
  //       email,
  //       mobile,
  //       office

  //      })
  //    })
  //    .then(response=>response.json())
  //    .then(res=>{

  //     navigate("/all-students")
  //    })
  //    .catch(err=>{
  //        console.log(err)
  //     })
  // };

  // using axios method post
  let handleSubmit = async (values) => {
    console.log(values);
    try {
      let response = await axios.post(Url, values);
      console.log(response);
      if (response.status >= 200 && response.status) {
        navigate("/all-students");
      } else alert("internal sever issue  ");
    } catch (error) {
      console.log(error);
    }
  };

  //  console.log(newArray)
  // console.log("Clicked", name,email,mobile,office);

  return (
    <div>
      <h1>AddStudents</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            placeholder="Enter Name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            className="form-control"
            placeholder="Enter Email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="name">Password</label>
          <input
            id="password"
            name="password"
            type="text"
            className="form-control"
            placeholder="Enter password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="name">mobile</label>
          <input
            id="mobile"
            name="mobile"
            type="text"
            className="form-control"
            placeholder="Enter mobile"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.mobile}
          />
          {formik.touched.mobile && formik.errors.mobile ? (
            <div style={{ color: "red" }}>{formik.errors.mobile}</div>
          ) : null}
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );

  //  <Form>
  // //       <Form.Group className="mb-3">
  // //         <Form.Label>Name</Form.Label>
  // //         <Form.Control
  //           type="text"
  //           placeholder="Name"
  //           onChange={(e) => setName(e.target.value)}
  //         />
  //       </Form.Group>
  //       <Form.Group className="mb-3">
  //         <Form.Label>Email address</Form.Label>
  //         <Form.Control
  //           type="email"
  //           placeholder="Enter email"
  //           onChange={(e)=>setEmail(e.target.value)}
  //         />
  //         <Form.Text className="text-muted">
  //           We'll never share your email with anyone else.
  //         </Form.Text>
  //       </Form.Group>

  //       <Form.Group className="mb-3">
  //         <Form.Label>Mobile</Form.Label>
  //         <Form.Control
  //           type="text"
  //           placeholder="Mobile"
  //           onChange={(e)=>setMobile(e.target.value)}
  //         />
  //       </Form.Group>
  //       <Form.Group className="mb-3">
  //         <Form.Label>Office</Form.Label>
  //         <Form.Control
  //           type="text"
  //           placeholder="Office"
  //           onChange={(e)=>setOffice(e.target.value)}
  //         />
  //       </Form.Group>

  //       <Button variant="primary" onClick={handleSubmit}>
  //         Submit
  //       </Button>
  // </Form>
}
export default AddStudents;
