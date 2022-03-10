import React from 'react';
import AcademicMembership from '../academic membership/AcademicMembership';
import './academicmem.css';
import Dashsearch from '../dashSearch/Dashsearch';
function AcademicPage(props) {
    return (
        <div className='academicmem'>
            <Dashsearch />
            <div className='academictable'>
            <AcademicMembership />
            </div>
        </div>
    );
}

export default AcademicPage;