import { adminApi } from '../api/adminApi';
import {useState} from "react";

const AddAdmin = () => {
    const [adminData, setAdminData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await adminApi.createAdmin(adminData);
            // Handle success
        } catch (error) {
            console.error("Error creating admin", error);
            // Handle error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={adminData.username}
                onChange={handleChange}
                placeholder="Username"
                required
            />
            <input
                type="password"
                name="password"
                value={adminData.password}
                onChange={handleChange}
                placeholder="Password"
                required
            />
            <button type="submit">Add Admin</button>
        </form>
    );
};

export default AddAdmin;
