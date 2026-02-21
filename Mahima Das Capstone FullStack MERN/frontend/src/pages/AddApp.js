import React, { useState } from 'react';
import { createApp } from '../services/appService';

const AddApp = () => {
    const [appName, setAppName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('appName', appName);
        formData.append('description', description);
        formData.append('appImage', image);

        try {
            const result = await createApp(formData, token);
            console.log(result);
            alert('App created successfully!');
        } catch (error) {
            alert('Error creating app. Are you an owner?');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="App Name" onChange={e => setAppName(e.target.value)} required />
            <textarea placeholder="Description" onChange={e => setDescription(e.target.value)} required />
            <input type="file" onChange={e => setImage(e.target.files[0])} required />
            <button type="submit">Create App</button>
        </form>
    );
};

export default AddApp;