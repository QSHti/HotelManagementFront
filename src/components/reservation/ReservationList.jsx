import { useLocation, useNavigate } from "react-router-dom";
import { reservationApi } from "../api/reservationApi";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const ReservationList = (props) => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state?.guest?.id) {
      navigate("/");
      return;
    }
    reservationApi
      .getAllReservationsForGuestId(location.state.guest.id)
      .then((response) => setReservations(response.data))
      .catch((err) => setError("Error fetching reservations"));
  }, []);

  function listToDate(ls) {
    let [a, b, c] = ls;
    if (b < 10) b = "0" + b;
    if (c < 10) c = "0" + c;
    return a + "-" + b + "-" + c;
  }

  function handleNewReservation() {
    navigate("/add-reservation", { state: { guest: location.state.guest } });
  }

  function handleEditReservation(reservation) {
    navigate("/add-reservation", {
      state: { guest: location.state.guest, reservation },
    });
  }

  if (error) return <p>{error}</p>;

  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <div
        style={{ width: "60vw" }}
        className="d-flex flex-column align-items-center my-4"
      >
        <div className="d-flex my-2 justify-content-center w-100">
          <h2 className="mb-0">Reservations</h2>
          <div className="flex-grow-1"></div>
          <div>
            <Button
              variant="outline-dark"
              size="sm"
              onClick={() => handleNewReservation()}
            >
              Create New Reservation
            </Button>
          </div>
        </div>
        {reservations && (
          <Table bordered hover>
            <thead>
              <tr>
                <th>Room Id</th>
                <th>Guest Id</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((room, index) => (
                <tr key={index}>
                  <td>{room.roomId}</td>
                  <td>{room.guestId}</td>
                  <td>{listToDate(room.checkInDate)}</td>
                  <td>{listToDate(room.checkOutDate)}</td>
                  <td>${room.totalPrice}</td>
                  <td>
                    <Button
                      variant="outline-dark"
                      size="sm"
                      onClick={() => handleEditReservation(room)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default ReservationList;
