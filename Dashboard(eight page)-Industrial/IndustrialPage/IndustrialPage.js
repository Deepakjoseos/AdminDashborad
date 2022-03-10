import React from 'react';
import Knowledge from '../Industrial/Industrial';
import './industrialpage.css';
import Dashsearch from '../dashSearch/Dashsearch';


function IndustrialPage(props) {
    return (
        <div className='industrialpage'>
            <Dashsearch />
            <div className='industrialtable'>
            <Knowledge />
            </div>
            </div>
    );
}

export default IndustrialPage;