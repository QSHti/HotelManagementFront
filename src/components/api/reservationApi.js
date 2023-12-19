import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/reservations'; // Adjust as necessary

export const reservationApi = {
    createReservation(reservationData) {
        return axios.post(`${API_BASE_URL}/create`, reservationData);
    },
    getReservationById(id) {
        return axios.get(`${API_BASE_URL}/${id}`);
    },
    deleteReservation(id) {
        return axios.delete(`${API_BASE_URL}/delete/${id}`);
    },
    getAllReservations() {
        return axios.get(`${API_BASE_URL}/all`);
    },
    getAllReservationsForGuestId(id) {
        return axios.get(`${API_BASE_URL}/guest/${id}`);
    }
};
