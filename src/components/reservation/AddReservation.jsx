import { reservationApi } from '../api/reservationApi';
import {useState} from "react";

const AddReservation = () => {
    const [reservationData, setReservationData] = useState({
        guestId: '',
        roomId: '',
        checkInDate: '',
        checkOutDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReservationData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await reservationApi.createReservation(reservationData);
            // Handle success
        } catch (error) {
            console.error("Error creating reservation", error);
            // Handle error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="guestId"
                value={reservationData.guestId}
                onChange={handleChange}
                placeholder="Guest ID"
                required
            />
            <input
                type="text"
                name="roomId"
                value={reservationData.roomId}
                onChange={handleChange}
                placeholder="Room ID"
                required
            />
            <input
                type="date"
                name="checkInDate"
                value={reservationData.checkInDate}
                onChange={handleChange}
                placeholder="Check-in Date"
                required
            />
            <input
                type="date"
                name="checkOutDate"
                value={reservationData.checkOutDate}
                onChange={handleChange}
                placeholder="Check-out Date"
                required
            />
            <button type="submit">Add Reservation</button>
        </form>
    );
};

export default AddReservation;
