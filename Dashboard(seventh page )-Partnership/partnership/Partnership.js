import {React, useState} from 'react';
import './partnership.css';
import { TextField, IconButton } from "@material-ui/core";
import { DeleteOutline, HomeSharp, SearchOutlined } from "@material-ui/icons";
import { Partner } from "../dashboard/dummyData";
import { Link } from "react-router-dom";
import { DataGrid, GridToolbarExport, GridToolbarContainer} from "@material-ui/data-grid";

function Partnership(props) {

    const [data, setData] = useState(Partner);

    
  
  const columns = [
    { field: "id", headerName: "INDEX NO", width: 200 },
    {
      field: "name",
      headerName: "NAME",
      width: 500,
      renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.name}
          </div>
        );
      },
    },
    { field: "email", headerName: "EMAIL", width: 200,
    renderCell: (params) => {
        return (
          <div className="CourseListUser">
          {params.row.email}
        </div>
        );
      },
},
    
    {
      field: "phoneno",
      headerName: "PHONE NO",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.phoneno}
          </div>
        );
      },
    },
    {
        field: "address",
        headerName: "ADDRESS",
        width: 190,
        renderCell: (params) => {
          return (
            <div className="CourseListUser">
              {params.row.address}
            </div>
          );
        },
      },
    {
      field: "firm",
      headerName: "FIRM",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.firm}
          </div>
        );
      },
    },
    {
      field: "district",
      headerName: "DISTRICT",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.district}
          </div>
        );
      },
    },
    {
      field: "officespace",
      headerName: "OFFICE SPACE",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.officespace}
          </div>
        );
      },
    },
    {
      field: "report",
      headerName: "REPORT",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.report}
          </div>
        );
      },
    },{
      field: "expectation",
      headerName: "EXPECTATION",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.expectation}
          </div>
        );
      },
    },{
      field: "profile",
      headerName: "PROFILE",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.profile}
          </div>
        );
      },
    },{
      field: "countemployee",
      headerName: "EMPLOYEE COUNT",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.countemployee}
          </div>
        );
      },
    },{
      field: "date",
      headerName: "REGISTERED DATE",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="CourseListUser">
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

export default Partnership;