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

