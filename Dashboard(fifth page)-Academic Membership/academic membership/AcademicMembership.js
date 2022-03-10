import {React, useState} from 'react';
import './academicMembership.css';
import { TextField, IconButton } from "@material-ui/core";
import { DeleteOutline, HomeSharp, SeacheOutlined, SearchOutlined } from "@material-ui/icons";
import {  AcademicMem } from "../dashboard/dummyData";
import { Link } from "react-router-dom";
import { DataGrid, GridToolbarExport, GridToolbarContainer} from "@material-ui/data-grid";

function AcademicMembership(props) {

    const [data, setData] = useState( AcademicMem);

   
  
  const columns = [
    { field: "id", headerName: "INDEX NO", width: 200 },
    {
      field: "memberid",
      headerName: "MEMBER ID",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.memberid}
          </div>
        );
      },
    },
    { field: "collegename", headerName: "NAME", width: 500,
    renderCell: (params) => {
        return (
          <div className="userListUser">
        {params.row.collegename}
          </div>
        );
      },
},
    
    {
      field: "website",
      headerName: "WEBSITE",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
        {params.row.website}
          </div>
        );
      },
    },
    {
        field: "date",
        headerName: "CREATION DATE",
        width: 190,
        renderCell: (params) => {
          return (
            <div className="userListUser">
          {params.row.date}
            </div>
          );
        },
      },
    
  ];
  function MyExportButton(){
    return(
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

    return (
        <div className="CoursesTable">
        
    <DataGrid
      rows={data}
      disableSelectionOnClick
      columns={columns}
      pageSize={8}
      checkboxSelection
      components={{Toolbar:MyExportButton,}}

    />
  </div>
    );
}

export default AcademicMembership;