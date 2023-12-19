import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { guestApi } from "../api/guestApi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const homeStyle = {
    marginTop: "50px",
  };
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const registerUser = () => {
    guestApi
      .registerGuest({
        firstName: email.split("@")[0],
        lastName: "",
        email: email,
      })
      .then((res) => {
        console.log("Ressfdsaft", res.data);
        navigate("/reservations", { state: { guest: res.data } });
      });
  };

  const handleEmailClick = (event) => {
    event.preventDefault();
    console.log(email);
    guestApi
      .getGuestByEmail(email)
      .then((res) => {
        navigate("/reservations", { state: { guest: res.data } });
        console.log(res.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          registerUser();
        }
      });
  };

  return (
    <div style={homeStyle} className="d-flex align-items-center flex-column">
      <h1>Welcome to the Hotel Management System</h1>
      <p>Your one-stop solution for managing hotel operations effectively.</p>
      <Form onSubmit={handleEmailClick} className="d-flex flex-column align-items-center mt-4">
        <div className="mb-2" style={{ minWidth: "30vw" }}>
          <Form.Control
            type="email"
            value={email}
            required
            placeholder="Enter Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <Button
          variant="outline-primary"
          size="sm"
          type="submit"
        >
          View Details
        </Button>
      </Form>
    </div>
  );
};

export default Home;
