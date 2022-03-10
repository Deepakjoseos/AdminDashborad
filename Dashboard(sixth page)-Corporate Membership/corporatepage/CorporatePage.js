import React from 'react';
import './Corporatepage.css';
import Dashsearch from '../dashSearch/Dashsearch';
import CorporateMembership from '../Corporate membership/CorporateMembership';
function CorporatePage(props) {
    return (
        <div className='corporategpage'>
            <Dashsearch />
            <div className='corporatetable'>
            <CorporateMembership />
            </div>
        </div>
    );
}

export default CorporatePage;