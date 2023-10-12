import axios from 'axios';

export const getUsers = () => {
    return axios.get('/api/users') // Replace with your actual API endpoint
        .then(response => response.data)
        .catch(error => {
            // Handle the error here
            throw error;
        });
};
