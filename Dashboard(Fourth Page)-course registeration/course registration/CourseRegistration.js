import {React,useState} from 'react';
import './coursereg.css';
import { TextField, IconButton } from "@material-ui/core";
import { DeleteOutline, HomeSharp, SeacheOutlined, SearchOutlined } from "@material-ui/icons";
import { coursereg } from "../dashboard/dummyData";
import { Link } from "react-router-dom";
import { DataGrid, GridToolbarExport, GridToolbarContainer} from "@material-ui/data-grid";



function CourseRegistration(props) {
  const [data, setData] = useState(coursereg);

  
    const columns = [
        { field: "id", headerName: "INDEX NO", width: 200,
        renderCell: (params) => {
          return (
            <div className="CourseListUser">
              {params.row.id}
            </div>
          );
        } },
        { field: "name", headerName: "NAME", width: 200,
        renderCell: (params) => {
          return (
            <div className="CourseListUser">
              {params.row.name}
            </div>
          );
        } },
        { field: "phoneno", headerName: "PHONE NUMBER", width: 200,renderCell: (params) => {
          return (
            <div className="CourseListUser">
              {params.row.phoneno}
            </div>
          );
        }
       },
        { field: "email", headerName: "EMAIL", width: 200,renderCell: (params) => {
          return (
            <div className="CourseListUser">
              {params.row.email}
            </div>
          );
        } },{
          field: "employeestatus",
          headerName: "EMPLOYEE STATUS",
          width: 300,
          renderCell: (params) => {
            return (
              <div className="CourseListUser">
                {params.row.employeestatus}
              </div>
            );
          },
        },
        {
          field: "coursename",
          headerName: "COURSE",
          width: 900,
          renderCell: (params) => {
            return (
              <div className="CourseListUser">
                {params.row.coursename}
              </div>
            );
          },
        },
        { field: "graduation", headerName: "GRADUATION", width: 200,
        renderCell: (params) => {
            return (
              <div className="userListUser">
                <img className="CourseListImg" src={params.row.graduation} alt="" />
              </div>
            );
          },
    },
        
        {
          field: "comments",
          headerName: "COMMENTS",
          width: 200, renderCell: (params) => {
            return (
              <div className="userListUser">
                <img className="CourseListImg" src={params.row.comments} alt="" />
              </div>
            );
          }
        },
        
        {
          field: "dateofregist",
          headerName: "REGISTERED DATE",
          width: 300,renderCell: (params) => {
            return (
              <div className="userListUser">
                <img className="CourseListImg" src={params.row.dateofregist} alt="" />
              </div>
            );
          }
          
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

export default CourseRegistration;