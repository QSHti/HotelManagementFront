import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/rooms'; // Adjust as necessary

export const roomApi = {
    createRoom(roomData) {
        return axios.post(`${API_BASE_URL}/addNew/`, roomData);
    },
    getAllRooms() {
        return axios.get(`${API_BASE_URL}/all`);
    },
    isRoomBooked(roomId) {
        return axios.get(`${API_BASE_URL}/${roomId}/isBooked`);
    },
    deleteRoom(id) {
        return axios.delete(`${API_BASE_URL}/delete/${id}`);
    },
};
