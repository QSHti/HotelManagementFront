import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RoomList from '../rooms/RoomList.jsx';
import RoomDetail from '../rooms/RoomDetail.jsx';
import BookingForm from '../booking/BookingForm.jsx';
import NavigationBar from '../navbar/NavigationBar.jsx';

const App = () => {
    return (
        <Router>
            <NavigationBar />
            <Switch>
                <Route path="/" exact component={RoomList} />
                <Route path="/rooms/:id" component={RoomDetail} />
                <Route path="/book" component={BookingForm} />
                {/* Add other routes as needed */}
            </Switch>
        </Router>
    );
};

export default App;
