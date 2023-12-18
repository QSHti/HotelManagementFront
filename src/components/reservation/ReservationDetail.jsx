import { reservationApi } from '../api/reservationApi';
import {useEffect, useState} from "react";

const ReservationDetail = ({ reservationId }) => {
    const [reservation, setReservation] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        reservationApi.getReservationById(reservationId)
            .then(response => setReservation(response.data))
            .catch(err => setError('Error fetching reservation details'));
    }, [reservationId]);

    if (error) return <p>{error}</p>;
    if (!reservation) return <p>Loading reservation details...</p>;

    return (
        <div>
            <h2>Reservation Details</h2>
            <p>Guest ID: {reservation.guestId}</p>
            <p>Room ID: {reservation.roomId}</p>
            <p>Check-in: {reservation.checkInDate}</p>
            <p>Check-out: {reservation.checkOutDate}</p>
            {/* Add more reservation details as needed */}
        </div>
    );
};

export default ReservationDetail;
