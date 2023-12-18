import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/guests'; // Adjust as necessary

export const guestApi = {
    registerGuest(guestData) {
        return axios.post(`${API_BASE_URL}/addNew/`, guestData);
    },
    getGuestByLastName(lastName) {
        return axios.get(`${API_BASE_URL}/${lastName}`);
    },
    deleteGuest(id) {
        return axios.delete(`${API_BASE_URL}/delete/${id}`);
    },
};
