import React from 'react'
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";


function SubmitQuerySection() {
  const navigate = useNavigate();
  const querykey = localStorage.getItem('querykey')
  const config = {
    headers: { Authorization: `Bearer ${querykey}` }
  };

  const formik = useFormik({
    initialValues: {
      desc: "",
      title: "",
      tags: "default"
    },
    onSubmit: (values) => {
      axios
        .post(`http://127.0.0.1:8000/create/`, values, config)
        .then(() => navigate("/comm"))
        .catch(err => {
          console.log(err.response)
          alert(err.response.data.message)
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box style={{ padding: "40px 20px", display: 'flex', flexDirection: 'column', width: '600px', columnGap: '20px' }}>
        <h2>Please write your query</h2>
        <TextField
          id="outlined-basic"
          label="Query Title"
          variant="outlined"
          name='title'
          placeholder='Please write a short title of your query'
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <h2></h2>
        <TextField
          id="outlined-multiline-static"
          label="Query Description"
          multiline
          rows={10}
          name='desc'
          placeholder="Describe your query in detail"
          value={formik.values.desc}
          onChange={formik.handleChange}
        />
        <h2></h2>
        <div>
          <Button type='submit' style={{ marginRight: '20px' }} variant="contained">Submit</Button>
          <Button variant="outlined" color="error" onClick={() => navigate("/comm")}>Cancel</Button>
        </div>
      </Box >
    </form>

  )
}

export default SubmitQuerySection