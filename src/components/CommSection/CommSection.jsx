import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Chip } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const columns = [
    { field: 'id', headerName: 'ID', width: 140 },
    { field: 'title', headerName: 'Query Title', width: 260 },
    { field: 'department', headerName: 'Department', width: 260 },
    { field: 'submitted', headerName: 'Submission Date', width: 260 },
    {
        field: 'status', headerName: 'Query Status', width: 130, renderCell: params => {
            return (
                params.row.status == 'waiting' ? <Chip label="Pending" color="secondary" variant='outlined' /> :
                params.row.status == 'processing' ? <Chip label="Processing" color="success"  /> :
                params.row.status == 'closed' ? <Chip label="Closed" color="error"  /> :
                <Chip label="Something" color="primary"  />
            );
        },
    }
];

function CommSection() {
    const querykey = localStorage.getItem('querykey')
    const config = {
        headers: { Authorization: `Bearer ${querykey}` }
    };

    const [queries, setQueries] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/mytickets/', config)
            .then(res => {
                setQueries(res.data.data)
            })
            .catch(err => {
                alert('There is an error')
            })
    }, []);


    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={queries}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}

export default CommSection