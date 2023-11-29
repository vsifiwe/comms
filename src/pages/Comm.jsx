import React from 'react'
import { CommSection } from '../components'
import { Box, Button } from '@mui/material'
import { useNavigate } from "react-router-dom";

function Comm() {
  const navigate = useNavigate();
  return (
    <div>
      <Box style={{ padding: "40px 40px" }}>
        <Button variant="outlined" onClick={() => navigate("/query")}>Create New Query</Button>
        <h2></h2>
        <CommSection />
      </Box>
    </div>
  )
}

export default Comm