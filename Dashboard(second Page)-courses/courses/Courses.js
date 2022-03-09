import { React, useState} from 'react';
import './courses.css';
import { TextField, IconButton } from "@material-ui/core";
import { DeleteOutline, HomeSharp, SeacheOutlined, SearchOutlined } from "@material-ui/icons";
import { userRows } from "../dashboard/dummyData";
import { Link } from "react-router-dom";
import { DataGrid, GridToolbarExport, GridToolbarContainer} from "@material-ui/data-grid";



function Courses(props) {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "INDEX NO", width: 200 },
    {
      field: "course",
      headerName: "COURSE",
      width: 500,
      renderCell: (params) => {
        return (
          <div className="CourseListUser">
            {params.row.course}
          </div>
        );
      },
    },
    { field: " courseimage", headerName: "COURSE IMAGE", width: 200,
    renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="CourseListImg" src={params.row.courseimage} alt="" />
          </div>
        );
      },
},
    
    {
      field: "coursefee",
      headerName: "COURSE FEE",
      width: 250,
    },
    {
        field: "status",
        headerName: "STATUS",
        width: 190,
      },
    {
      field: "action",
      headerName: "ACTION",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/dashboard/courselist/course" + params.row.id}>
              <button className="CourseListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="CourseListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
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
        checkboxSelection
        components={{Toolbar:MyExportButton,}}
      />
    </div>
    );
}

export default Courses;