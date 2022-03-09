import React from 'react';
import Dashsearch from '../dashSearch/Dashsearch';
import Courses from '../courses/Courses';
import './coursepage.css';
function CoursePage(props) {
    return (
        <div className='coursepage'>
            <Dashsearch />
            <div className='Coursetable'>
            <Courses />
            </div>
        </div>
    );
}

export default CoursePage;