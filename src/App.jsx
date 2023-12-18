import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components here
import NavigationBar from './components/navbar/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import RoomList from './components/rooms/RoomList';
import RoomDetail from './components/rooms/RoomDetail';
import BookingForm from './components/booking/BookingForm';
import AddRoom from './components/rooms/AddRoom';
import AddAdmin from './components/admins/AddAdmin';
import AddReservation from './components/reservation/AddReservation';

const App = () => {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rooms" element={<RoomList />} />
                <Route path="/rooms/:id" element={<RoomDetail />} />
                <Route path="/book" element={<BookingForm />} />
                <Route path="/add-room" element={<AddRoom />} />
                <Route path="/add-admin" element={<AddAdmin />} />
                <Route path="/add-reservation" element={<AddReservation />} />
                {/* Add more routes here */}
            </Routes>
        </Router>
    );
};

export default App;
