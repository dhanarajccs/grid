import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';

const GridTable = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setTableData(data))
  }, []);

  console.log(tableData);

  return (
    <>
      <div >
        <DataGrid />
      </div>
    </>
  )  
};

export default GridTable;