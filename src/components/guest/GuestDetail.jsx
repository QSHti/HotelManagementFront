import { guestApi } from '../api/guestApi';
import {useEffect, useState} from "react";

const GuestDetail = ({ guestId }) => {
    const [guest, setGuest] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        guestApi.getGuestById(guestId)
            .then(response => setGuest(response.data))
            .catch(err => setError('Error fetching guest details'));
    }, [guestId]);

    if (error) return <p>{error}</p>;
    if (!guest) return <p>Loading guest details...</p>;

    return (
        <div>
            <h2>Guest Details</h2>
            <p>Name: {guest.firstName} {guest.lastName}</p>
            <p>Email: {guest.email}</p>
            {/* Add more guest details as needed */}
        </div>
    );
};

export default GuestDetail;
