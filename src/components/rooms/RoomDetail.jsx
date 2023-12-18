import { roomApi } from '../api/roomApi';
import {useState} from "react";

const RoomDetail = ({ roomId }) => {
    const [isBooked, setIsBooked] = useState(null);

    const checkRoomStatus = async () => {
        try {
            const status = await roomApi.isRoomBooked(roomId);
            setIsBooked(status);
        } catch (error) {
            console.error("Error checking room status", error);
            // Handle error appropriately
        }
    };

    return (
        <div>
            <h2>Room Details: {roomId}</h2>
            <button onClick={checkRoomStatus}>Check If Booked</button>
            {isBooked !== null && <p>Room Status: {isBooked ? 'Booked' : 'Available'}</p>}
        </div>
    );
};

export default RoomDetail;
