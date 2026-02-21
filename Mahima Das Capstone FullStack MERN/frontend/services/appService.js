export const createApp = async (formData, token) => {
    const response = await fetch('http://localhost:5000/api/apps', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    });

    if (!response.ok) throw new Error('Failed to create app');
    return response.json();
};