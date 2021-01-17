import { useState, useEffect } from 'react'; 
import { projectStorage } from '../firebase/config';

/* A hook is a small chunk of reusable code */ 

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    /* Takes in a function in the parameter and the dependencies, which is the file */
    /* Everytime a file is changed, the function will be run to upload the file */
    useEffect(() => {
        /* Function when file is changed */

        /* Creating a reference into the Firebase bucket */
        const storageRef = projectStorage.ref(file.name);
        
        /* Upload the file to the reference in storageRef */
        storageRef.put(file).on('state_changed',(snap) => {
            let progress = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(progress);

        }, (error_notification) => {
            setError(error_notification);

        }, async ()=> {
            /* Asynchronous Function - Finds the file after it's done uploading and finds the download URL, stores it in url */
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        });
    }, [file]);

    return { progress, url, error}
}

/* Exporting the hook */
export default useStorage;