import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Header from './Pages/Shared/Header/Header';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/booking/:serviceID">
                        <Booking />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
