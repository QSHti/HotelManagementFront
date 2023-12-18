import { adminApi } from '../api/adminApi';
import {useEffect, useState} from "react";

const AdminDetail = ({ adminId }) => {
    const [admin, setAdmin] = useState(null);

    const fetchAdminDetails = async () => {
        try {
            const response = await adminApi.getAdminById(adminId);
            setAdmin(response.data);
        } catch (error) {
            console.error("Error fetching admin details", error);
            // Handle error appropriately
        }
    };

    useEffect(() => {
        fetchAdminDetails();
    }, [adminId]);

    return (
        <div>
            <h2>Admin Details</h2>
            {admin && (
                <>
                    <p>Username: {admin.username}</p>
                    {/* Display other admin details */}
                </>
            )}
        </div>
    );
};

export default AdminDetail;
