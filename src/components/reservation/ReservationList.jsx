import { reservationApi } from '../api/reservationApi';
import {useEffect, useState} from "react";

const ReservationList = () => {
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        reservationApi.getAllReservations()
            .then(response => setReservations(response.data))
            .catch(err => setError('Error fetching reservations'));
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Reservations</h2>
            <ul>
                {reservations.map(reservation => (
                    <li key={reservation.id}>
                        {reservation.guestId} - {reservation.roomId} ({reservation.checkInDate} to {reservation.checkOutDate})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReservationList;
