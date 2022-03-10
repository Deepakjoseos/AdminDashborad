import React from 'react';
import Knowledge from '../knowledge/Knowledge';
import './knowledgepage.css';
import Dashsearch from '../dashSearch/Dashsearch';
function KnowledgePage(props) {
    return (
        <div className='knowledgegpage'>
            <Dashsearch />
            <div className='knowledgetable'>
            <Knowledge />
            </div>
        </div>
    );
}

export default KnowledgePage;