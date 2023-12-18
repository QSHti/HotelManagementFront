import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/admins'; // Adjust as necessary

export const adminApi = {
    createAdmin(adminData) {
        return axios.post(`${API_BASE_URL}/addNew/`, adminData);
    },
    getAdminByUsername(username) {
        return axios.get(`${API_BASE_URL}/${username}`);
    },
    deleteAdmin(id) {
        return axios.delete(`${API_BASE_URL}/delete/${id}`);
    },
};
