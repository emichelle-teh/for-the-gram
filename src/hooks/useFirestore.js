import { useState, useEffect } from 'react'; 
import { projectFirestore } from '../firebase/config'; 
 
const useFirestore = (collection) => {
    // initially it's an empty array 
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const done = projectFirestore.collection(collection)
        // snapshot object represent snapshot of database at that moment in time
            .onSnapshot((snap) => {
                let documents = [];

                /* Loop through each image in the database and add it into the database */
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id, name:doc.name})
                });
                setDocs(documents);
        });

        /* Stop listening to the documents  */
        return () => done();

    }, [collection])

    return {docs};
}

export default useFirestore;