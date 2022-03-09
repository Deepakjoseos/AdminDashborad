import React from 'react';
import './CoursePage.css';
import Dashsearch from '../dashSearch/Dashsearch'
import CourseRegistration from '../course registration/CourseRegistration';
function CourseRegistrationPage(props) {
    return (
        <div className='courseregpage'>
            <Dashsearch />
            <div className='courseregtable'>
            <CourseRegistration />
            </div>
        </div>
    );
}

export default CourseRegistrationPage;