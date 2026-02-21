import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api';

const EditApp = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(true);
    const [features, setFeatures] = useState(''); 
    const [error, setError] = useState('');

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const featureArray = features.split(',').map(feature => feature.trim());

            await API.put(`/apps/update/${id}`, {
                isVisible: isVisible,
                features: featureArray
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            alert("Application updated successfully!");
            navigate('/dashboard'); 

        } catch (err) {
            console.error("Update Error:", err);
            setError(err.response?.data?.error || "Failed to update the app.");
        }
    };

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to completely delete this application? This cannot be undone.")) {
            try {
                const token = localStorage.getItem("token");
                await API.delete(`/apps/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                alert("Application deleted successfully!");
                navigate("/dashboard"); 
            } catch (error) {
                alert(error.response?.data?.error || "Failed to delete application.");
            }
        }
    };

    return (
        <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Edit Application settings</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            <form onSubmit={handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                
                <div>
                    <label><strong>Visibility:</strong></label>
                    <select 
                        value={isVisible} 
                        onChange={(e) => setIsVisible(e.target.value === 'true')}
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    >
                        <option value="true">Public (Visible to everyone)</option>
                        <option value="false">Hidden (Draft mode)</option>
                    </select>
                </div>

                <div>
                    <label><strong>App Features:</strong> (Separate with commas)</label>
                    <textarea 
                        placeholder="e.g. Dark mode, Offline tracking, Live chat..."
                        value={features}
                        onChange={(e) => setFeatures(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginTop: '5px', minHeight: '80px' }}
                    />
                </div>

                <button type="submit" style={{ padding: '10px', backgroundColor: '#282c34', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Save Changes
                </button>
                <button type="button" onClick={() => navigate("/dashboard")} style={styles.cancelBtn}>
                    Cancel
                </button>
                
                <button type="button" onClick={handleDelete} style={{...styles.cancelBtn, background: "#dc3545", marginTop: "15px"}}>
                    Delete App
                </button>
            </form>
        </div>
    );
};

const styles = {
    cancelBtn: { 
        padding: "10px", 
        background: "#6c757d", 
        color: "white", 
        border: "none", 
        borderRadius: "4px", 
        cursor: "pointer" 
    }
};

export default EditApp;