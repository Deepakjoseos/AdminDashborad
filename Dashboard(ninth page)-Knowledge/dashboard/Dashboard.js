import {React, useState} from 'react';
import './dashboard.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/Sidebar';
import Dashhome from '../dashhome/Dashhome';
import Courses from '../courses/Courses';
import Testimonial from '../testimonial/Testimonial';
import Knowledge from '../knowledge/Knowledge';
import Industrial from "../Industrial/Industrial"
import CourseRegistration from '../course registration/CourseRegistration';
import AcademicMembership from '../academic membership/AcademicMembership';
import CorporateMembership from '../Corporate membership/CorporateMembership';
import Partnership from '../partnership/Partnership';
import Coursepage from '../coursepage/Coursepage';
import TestimonialPage from '../testimonialpage/TestimonialPage';
import CourseRegistrationPage from '../CourseRegistrationPage/CourseRegistrationPage'
import AcademicPage from '../AcademinMembershipPage/AcademicPage';
import KnowledgePage from '../knowledgepage/KnowledgePage';
function Dashboard(props) {
    return (
        <div>
            <Topbar />
            <div className='cont'>
                <Sidebar />
                <KnowledgePage/>
                
            </div>
        </div>
    );
}

export default Dashboard;