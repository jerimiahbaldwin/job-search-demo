import React from 'react'

import FileUpload from './components/file-upload';
import ManageJobs from './components/manage-jobs';

function Admin(){

    return (
        <main id="main">
            <FileUpload />
            <ManageJobs />
            <a href="/#" className="back-to-top"><i className="icofont-simple-up"></i></a>
        </main>
    )
}

export default Admin;