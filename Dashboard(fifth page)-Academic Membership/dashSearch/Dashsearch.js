import React from 'react';
import './dashsearch.css';
import { TextField, IconButton } from "@material-ui/core";
import { HomeSharp, SeacheOutlined, SearchOutlined } from "@material-ui/icons";



function Dashsearch(props) {
    return (
      <div className='dashsearch'>

        <div className='Menu'>
            
            <HomeSharp  fontSize='large' />
            
              <li className='MenuItem'>
                Dashboard
              </li>
              <li className='MenuItem'>
                /
              </li>
              <li className='MenuItem'>
                Academic Membership
              </li>
             
  
              <TextField
              id='standard-bare'
              variant='outlined'
              InputProps={{endAdornment:(
                <IconButton>
                  <SearchOutlined />
                </IconButton>
              )}} />
             </div>
              </div>
    );
}

export default Dashsearch;