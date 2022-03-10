import {React, useState} from 'react';
import './corporateMembership.css';
import { TextField, IconButton } from "@material-ui/core";
import { DeleteOutline, HomeSharp, SeacheOutlined, SearchOutlined } from "@material-ui/icons";
import { CorporateMem } from "../dashboard/dummyData";
import { Link } from "react-router-dom";
import { DataGrid, GridToolbarExport, GridToolbarContainer} from "@material-ui/data-grid";

function CorporateMembership(props) {
    const [data, setData] = useState(CorporateMem);

    
  
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
    { field: "address", headerName: "ADDRESS", width: 200,
    renderCell: (params) => {
      return (
        <div className="CourseListUser">
          {params.row.address}
        </div>
      );
      },
},
    
    {
      field: "website",
      headerName: "WEBSITE",
      width: 250,renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.website}
          </div>
        );
        },
    },
    {
        field: "head",
        headerName: "HEAD",
        width: 190,renderCell: (params) => {
          return (
            <div className="CourseListUser">
              {params.row.head}
            </div>
          );
          },
      },
    {
      field: "nature",
      headerName: "NATURE",
      width: 180,renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.nature}
          </div>
        );
        },
      
    },{
      field: "typeof",
      headerName: "TYPE OF",
      width: 180,renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.typeof}
          </div>
        );
        },
      
    },{
      field: "identityno",
      headerName: "IDENTITY NO",
      width: 180,renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.identityno}
          </div>
        );
        },
      
    },
    {
      
        field: "gst",
        headerName: "GST",
        width: 180,renderCell: (params) => {
          return (
            <div className="CourseListUser">
              {params.row.gst}
            </div>
          );
          },
        
      
    },{
      field: "contact",
      headerName: "NAME OF CONTACT",
      width: 180,renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.contact}
          </div>
        );
        },
      
    },{
      field: "phoneno",
      headerName: "PHONE NO",
      width: 180,renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.phoneno}
          </div>
        );
        },
      
    },
    {
      field: "email",
      headerName: "EMAIL",
      width: 180,renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.email}
          </div>
        );
        },
      
    },{
      field: "skill",
      headerName: "TECHNICAL SKILL",
      width: 180,renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.skill}
          </div>
        );
        },
      
    },{
      field: "countemployee",
      headerName: "EMPLOYEE COUNT",
      width: 180,renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.countemployee}
          </div>
        );
        },
      
    },{
      field: "hire",
      headerName: "HIRE",
      width: 180,renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.hire}
          </div>
        );
        },
      
    },{
      field: "patent",
      headerName: "PATENT",
      width: 180,renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.patent}
          </div>
        );
        },
      
    },{
      field: "collaborate",
      headerName: "COLLABORATE",
      width: 180,renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.collaborate}
          </div>
        );
        },
      
    },{
      field: "details",
      headerName: "DETAILS",
      width: 180,renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.details}
          </div>
        );
        },
      
    },{
      field: "date",
      headerName: "APPLY DATE",
      width: 180,renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.date}
          </div>
        );
        },
      
    }
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

export default CorporateMembership;