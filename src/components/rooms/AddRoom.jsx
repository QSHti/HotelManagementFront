import { roomApi } from '../api/roomApi';
import {useState} from "react";
import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';

const AddRoom = () => {
    const navigate = useNavigate();
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

    function handleAddRoom(event) {
        event.preventDefault();
        roomApi
            .createRoom(roomData)
            .then((res) => {
                navigate("/rooms");
            })
            .catch((err) => console.error("Error creating room", err));
    }

    function handleRoomNumberChange(event) {
        console.log(event.target.value);
    }

    return (

        <div className="d-flex flex-column align-items-center my-4">
        <div style={{width: "60vw"}}>
        <h2>Add Rooms</h2>
        <Form onSubmit={handleAddRoom}>
            <Form.Group controlId="forRoomNumber">
                <Form.Label>Room Number</Form.Label>
                <Form.Control
                onChange={e => {setRoomData({...roomData, roomNumber: e.target.value})}}
                type="number" min="1" required placeholder="" />
            </Form.Group>
            <Form.Group controlId="forRoomType">
                <Form.Label>Room Type</Form.Label>
                <Form.Control
                onChange={e => {setRoomData({...roomData, roomType: e.target.value})}}
                type="text" required placeholder="" />
            </Form.Group>
            <Form.Group controlId="forPricePerNight">
                <Form.Label>Price Per Night</Form.Label>
                <Form.Control
                onChange={e => {setRoomData({...roomData, pricePerNight: e.target.value})}}
                type="number" required placeholder="" />
            </Form.Group>
            <Button className="my-2" variant="primary" type="submit">Add Room</Button>
        </Form>
        </div>
        </div>
    );
};

export default AddRoom;
