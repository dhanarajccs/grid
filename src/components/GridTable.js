/*
import React from 'react'

const GridTable = () => {
  return (
    <div>Grid Table</div>
  )
}

export default GridTable
*/

/*
import React, { useState, useEffect } from "react";

const GridTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => console.log(json))
  }, []);

  return (
    <>
        Grid Table Tutorial
    </>
    )
};

export default GridTable;
*/



/*
import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid'

const GridTable = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => console.log(data))
  }, []);

  console.log(tableData);

  return (
    <>
      <div>
        <DataGrid />
      </div>
    </>
  )  
};

export default GridTable;
*/

import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'username', headerName: 'User Name', width: 300 },
  { field: 'email', headerName: 'Email', width: 300 },    
  { 
    field: 'street', headerName: 'Street', width: 300,
    valueGetter: (tableData) => tableData.row.address.street
  },
  { 
    field: 'company', headerName: 'Company', width: 300,
    valueGetter: (tableData) => tableData.row.company.name
  }
];

const GridTable = () => {

  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = useState(5)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setTableData(data))
  }, []);

  // console.log(tableData);

  return (
    <div style={{ height: 400, width: '100%' }}>      
      <DataGrid 
        rows={tableData} 
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 20]} 
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      />        
    </div>
  );
}

export default GridTable