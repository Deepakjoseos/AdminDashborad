import React from 'react';
import './dashboard.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/Sidebar';
import Dashhome from '../dashhome/Dashhome';
import Courses from '../courses/Courses';
import Testimonial from '../testimonial/Testimonial';
import Knowledge from '../knowledge/Knowledge';
function Dashboard(props) {
    return (
        <div>
            <Topbar />
            <div className='cont'>
                <Sidebar />
                <Dashhome/>
                
            </div>
        </div>
    );
}

export default Dashboard;