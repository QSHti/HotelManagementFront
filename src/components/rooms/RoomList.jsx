import { roomApi } from '../api/roomApi';
import {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const RoomList = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await roomApi.getAllRooms();
                setRooms(response.data);
            } catch (error) {
                console.error("Error fetching rooms", error);
                // Handle error appropriately
            }
        };

        fetchRooms();
    }, []);

    function handleDeleteRoom(room) {
        roomApi
            .deleteRoom(room.id)
            .then((res) => {
                setRooms(rooms.filter((r) => r.id !== room.id));
            })
            .catch((err) => console.error("Error deleting room", err));
    }

    return (
        <div className="d-flex flex-column align-items-center my-4">
        <div style={{width: "60vw"}}>
            <h2>Rooms</h2>
            {
                rooms && 
                <Table bordered hover>
                <thead>
                  <tr>
                    <th>Room Id</th>
                    <th>Room Number</th>
                    <th>Room Type</th>
                    <th>Price per night</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        rooms.map((room, index) => (
                            <tr key={index}>
                                <td>{room.id}</td>
                                <td>{room.roomNumber}</td>
                                <td>{room.roomType}</td>
                                <td>${room.pricePerNight}</td>
                                <td>
                                    <Button
                                        variant="outline-dark"
                                        size="sm"
                                        onClick={() => handleDeleteRoom(room)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                </Table>
            }
        </div>
        </div>
    );
};

export default RoomList;
