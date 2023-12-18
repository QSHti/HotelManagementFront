import { roomApi } from '../api/roomApi';
import {useEffect, useState} from "react";

const RoomList = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await roomApi.getAllRooms();
                setRooms(response.data);
            } catch (error) {
                console.error("Error fetching rooms", error);
                // Handle error appropriately
            }
        };

        fetchRooms();
    }, []);

    return (
        <div>
            <h2>Rooms</h2>
            <ul>
                {rooms.map(room => (
                    <li key={room.id}>{room.roomNumber} - {room.roomType}</li>
                ))}
            </ul>
        </div>
    );
};

export default RoomList;
