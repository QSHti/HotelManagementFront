import {reservationApi} from '../api/reservationApi.js';
import {useState} from "react";

const BookingForm = () => {
    const [reservationData, setReservationData] = useState({
        // Initialize with your reservation fields
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await reservationApi.createReservation(reservationData);
            // Handle successful booking
        } catch (error) {
            console.error("Error creating reservation", error);
            // Handle error appropriately
        }
    };

    const handleChange = (event) => {
        setReservationData({ ...reservationData, [event.target.name]: event.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <button type="submit">Book Room</button>
        </form>
    );
};

export default BookingForm;
