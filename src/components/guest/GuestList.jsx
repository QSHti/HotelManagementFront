import { guestApi } from '../api/guestApi';
import {useEffect, useState} from "react";

const GuestList = () => {
    const [guests, setGuests] = useState([]);

    useEffect(() => {
        const fetchGuests = async () => {
            try {
                const response = await guestApi.getGuests();
                setGuests(response.data);
            } catch (error) {
                console.error("Error fetching guests", error);
                // Handle error appropriately
            }
        };

        fetchGuests();
    }, []);

    return (
        <div>
            <h2>Guests</h2>
            <ul>
                {guests.map(guest => (
                    <li key={guest.id}>{guest.firstName} {guest.lastName}</li>
                ))}
            </ul>
        </div>
    );
};

export default GuestList;
