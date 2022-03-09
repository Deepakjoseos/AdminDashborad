import React from 'react';
import "./testpage.css";
import Dashsearch from "../dashSearch/Dashsearch"
import Testimonial from "../testimonial/Testimonial"
function TestimonialPage(props) {
    return (
        <div className='testpage'>
            <Dashsearch />
            <div className='testtable'>
            <Testimonial />
            </div>
        </div>
    );
}

export default TestimonialPage;