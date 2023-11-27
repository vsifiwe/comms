import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Chip } from '@mui/material';

const columns = [
    { field: 'id', headerName: 'ID', width: 140 },
    { field: 'query', headerName: 'Query Content', width: 260 },
    { field: 'submitted', headerName: 'Submission Date', width: 260 },
    { field: 'status', headerName: 'Query Status', renderCell: (params) => { return ( <Chip label="Pending" color="primary" variant='outlined' /> ) },}
];

const rows = [
    { id: 1, query: 'Snow', submitted: 'Jon', age: 35 },
    { id: 2, query: 'Lannister', submitted: 'Cersei', age: 42 },
    { id: 3, query: 'Lannister', submitted: 'Jaime', age: 45 },
    { id: 4, query: 'Stark', submitted: 'Arya', age: 16 },
    { id: 5, query: 'Targaryen', submitted: 'Daenerys', age: null },
    { id: 6, query: 'Melisandre', submitted: null, age: 150 },
    { id: 7, query: 'Clifford', submitted: 'Ferrara', age: 44 },
    { id: 8, query: 'Frances', submitted: 'Rossini', age: 36 },
    { id: 9, query: 'Roxie', submitted: 'Harvey', age: 65 },
];

function CommSection() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
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