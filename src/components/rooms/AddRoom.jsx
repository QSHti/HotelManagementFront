import { roomApi } from '../api/roomApi';
import {useState} from "react";

const AddRoom = () => {
    const [roomData, setRoomData] = useState({
        roomNumber: '',
        roomType: '',
        pricePerNight: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRoomData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await roomApi.createRoom(roomData);
            // Handle success (e.g., clear form, display success message)
        } catch (error) {
            console.error("Error creating room", error);
            // Handle error appropriately
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="roomNumber"
                value={roomData.roomNumber}
                onChange={handleChange}
                placeholder="Room Number"
                required
            />
            <input
                type="text"
                name="roomType"
                value={roomData.roomType}
                onChange={handleChange}
                placeholder="Room Type"
                required
            />
            <input
                type="text"
                name="pricePerNight"
                value={roomData.pricePerNight}
                onChange={handleChange}
                placeholder="Price Per Night"
                required
            />
            <button type="submit">Add Room</button>
        </form>
    );
};

export default AddRoom;
