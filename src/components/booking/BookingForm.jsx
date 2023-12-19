import { reservationApi } from "../api/reservationApi.js";
import { useState } from "react";
import * as React from "react";
import { DatePicker, Space } from "antd";
import dayJs from "dayjs";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { roomApi } from "../api/roomApi.js";
import { useLocation, useNavigate } from "react-router-dom";

const { RangePicker } = DatePicker;

const BookingForm = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(location.state.reservation?.checkInDate);
  const [endDate, setEndDate] = useState(location.state.reservation?.checkOutDate);
  const [rooms, setRooms] = useState([]);

  React.useEffect(() => {
    if (!location.state?.guest?.id) {
      navigate("/");
      return;
    }
  }, []);

  function listToDate(ls) {
    let [a, b, c] = ls;
    if (b < 10) b = "0" + b;
    if (c < 10) c = "0" + c;
    return a + "-" + b + "-" + c;
  }

  const handleSubmit = () => {
    let std = startDate;
    let etd = endDate;
    if(Array.isArray(std)) std = listToDate(std);
    if(Array.isArray(etd)) etd = listToDate(etd);
    roomApi
      .getAvailableRooms({
        checkInDate: std,
        checkOutDate: etd,
      })
      .then((res) => {
        setRooms(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("something went wrong");
      });
  };

  const handleChange = (props, dateString) => {
    console.log(dateString);
    setStartDate(dateString[0]);
    setEndDate(dateString[1]);
  };

  const handleRoomBook = (room) => {
    console.log( (room.pricePerNight * (new Date(endDate) - new Date(startDate))) /
    (1000 * 3600 * 24));
    console.log((new Date(endDate) - new Date(startDate)));
    reservationApi
      .createReservation({
        checkInDate: startDate,
        checkOutDate: endDate,
        roomId: room.id,
        guestId: location.state.guest.id,
        totalPrice:
          (room.pricePerNight * (new Date(endDate) - new Date(startDate))) /
          (1000 * 3600 * 24),
      })
      .then((res) => {
        navigate("/reservations", { state: location.state });
        console.log("Reservation Added Successfully", res);
      })
      .catch((err) => {
        console.log("something went wrong");
      });
  };

  return (
    <div className="w-100 d-flex flex-column align-items-center">
    <div style={{ width: "60vw" }} className="d-flex flex-column align-items-center justify-content-center mt-4">
      <div className="my-2 d-flex align-items-end w-100">
        <div className="mb-2">
          <pre className="mb-0">CheckIn - Checkout Date</pre>
          <RangePicker
            format={"YYYY-MM-DD"}
            value={[
              startDate ? dayJs(startDate) : null,
              endDate ? dayJs(endDate) : null,
            ]}
            onChange={handleChange}
          />
        </div>
        <div className="flex-grow-1"></div>
        <div>
          <Button variant="outline-dark" size="sm" onClick={handleSubmit}>
            Get Available Rooms
          </Button>
        </div>
      </div>

      <div className="mt-2 w-100">
        {" "}
        {rooms && (
          <Table bordered hover>
            <thead>
              <tr>
                <th>Room Id</th>
                <th>Room Number</th>
                <th>Room Type</th>
                <th>Price Per Night</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room, index) => (
                <tr key={index}>
                  <td>{room.id}</td>
                  <td>{room.roomNumber}</td>
                  <td>{room.roomType}</td>
                  <td>${room.pricePerNight}</td>
                  <td>
                    <Button
                      variant="outline-dark"
                      size="sm"
                      onClick={() => handleRoomBook(room)}
                    >
                      Book Room
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
    </div>
  );
};

export default BookingForm;
