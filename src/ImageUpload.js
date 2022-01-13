import React, { useState } from 'react';
import Button from "@mui/material/Button";
import {storage, db} from './firebase';

function ImageUpload() {
    const [caption, setCaption] = useState('');
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState('');

    const handleChange = (e) =>{
        if(e.target.file[0]){
            setImage(e.target.file[0]);
        }
    };

    const handleUpload = (e) => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
    }

    return (
        <div>
            <input type="text" placeholder='Enter a caption ...' onChange={event => setCaption(event.target.value)} />
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}

export default ImageUpload
