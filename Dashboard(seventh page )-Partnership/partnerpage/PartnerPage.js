import React from 'react';
import './partnerpage.css';
import Dashsearch from '../dashSearch/Dashsearch';
import Partnership from '../partnership/Partnership';

function PartnerPage(props) {
    return (
        <div className='partnergpage'>
            <Dashsearch />
            <div className='partnertable'>
            <Partnership />
            </div>
        </div>
    );
}

export default PartnerPage;