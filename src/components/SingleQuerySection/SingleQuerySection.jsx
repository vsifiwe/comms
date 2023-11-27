import React from 'react'
import { TextField, Button } from '@mui/material';

function SingleQuerySection() {
  return (
    <div>
      <h2>Please write your query</h2>
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={10}
        defaultValue="Default Value"
      />
      <Button variant="contained">Submit</Button>
    </div>
  )
}

export default SingleQuerySection