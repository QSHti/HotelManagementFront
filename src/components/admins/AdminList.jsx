import { adminApi } from '../api/adminApi';
import {useEffect, useState} from "react";

const AdminList = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const response = await adminApi.getAdmins();
                setAdmins(response.data);
            } catch (error) {
                console.error("Error fetching admins", error);
                // Handle error appropriately
            }
        };

        fetchAdmins();
    }, []);

    return (
        <div>
            <h2>Admins</h2>
            <ul>
                {admins.map(admin => (
                    <li key={admin.id}>{admin.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminList;
