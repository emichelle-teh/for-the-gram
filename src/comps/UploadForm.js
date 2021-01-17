import React, { useState } from 'react';

const UploadForm = () => {

    /* Instantiate a file constant, initially it will be null */ 
    const [file, setFile] = useState(null); 

    /* Setting an Error State */ 
    const [error,setError] = useState(null);

    /* Setting Notification that it's successful */ 
    const [success,setSuccess] = useState(null);

    /* Setting constraints on which types of files can be uploaded */
    const types = ['image/png','image/jpeg', 'image/jpg'];


    /* Function created to identify when an event changes the import field */
    const changeHandler = (e) => {
        
        /* Select the first file selected */
        let selected = e.target.files[0];
        console.log(selected)

        /* If a user selects the file, set the selected file in the file constant */ 
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError(' ');
            setSuccess( 'successfuly uploaded!');
        } else {
            setFile(null); 
            setError('You can only choose an image in a png, jpeg or jpg!');
        }
    }

    return (
        /* Allows the form to upload files */
        <form>
            <label>
            <input type="file" onChange={changeHandler}/>
            <span>+</span>
            </label>
            <div className="output">
            { error && <div className="error"> { error }</div> }
            { file && <div> {file.name} was {success } </div>}
            </div>
        </form>
    )
}

/* Export it to allow other files to use component */
export default UploadForm;