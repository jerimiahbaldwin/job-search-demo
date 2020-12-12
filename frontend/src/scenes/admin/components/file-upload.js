import React, {useState} from 'react';
import axios from 'axios';

function FileUpload(props) {
    var [selectedFile, setSelectedFile, onFileChange, onFileUpload, fileData] = useState(0);

    // On file select (from the pop up)
    onFileChange = event => { // Update the state
        setSelectedFile(event.target.files[0]);
    };

    // On file upload (click the upload button)
    onFileUpload = () => { // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append("myFile", selectedFile, selectedFile.name);

        // Details of the uploaded file
        console.log(selectedFile);

        // Request made to the backend api
        // Send formData object
        try {
          axios.post("/api/jobs/csv", formData);
        } catch (e) {
          console.error(e)
        }
    };
    // File content to be displayed after
    // file upload is complete
    fileData = () => {
        if (selectedFile) {
            console.log(selectedFile)
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {
                        selectedFile.name
                    }</p>
                    <p>File Type: {
                        selectedFile.type
                    }</p>
                    <p>
                        Last Modified:{" "}
                        {
                        new Date(selectedFile.lastModified).toDateString()
                    } </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br/>
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };
    return (
        <div className="mt-5 mb-5">
            <h1 className="mb-3">
                File Upload using React!
            </h1>
            <div>
                <input type="file"
                    onChange={onFileChange}/>
                <button onClick={onFileUpload}>
                    Upload!
                </button>
            </div>
            {
            fileData()
        } </div>
    )
}

export default FileUpload
