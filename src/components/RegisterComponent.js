import React from 'react';
// import LocationService from '../services/LocationService';
import '../styles/Login.css';
// import AuthService from '../services/auth/AuthService';
import Calendar from 'react-calendar';
import moment from 'moment';
import { useNavigate } from 'react-router';
import UserService from '../services/UserService';

function RegisterComponent () {
    const [date, setDate] = React.useState(new Date());
    const [showCalendar, setShowCalendar] = React.useState(false);
    const navigate = useNavigate();

    const handleChange = value => {
        setDate(value);
        setShowCalendar(false);
    };

    function handleSubmit(e) {
        e.preventDefault();
        const { first_name, last_name, username, password, country, city} = e.target.elements;

        const birth_date = moment(date.toLocaleDateString(), 'DD/MM/YYYY').format('YYYY-MM-DD');
        console.log(birth_date);

        const userInfo = { "firstName": first_name.value 
                         , "lastName": last_name.value
                         , "username": username.value
                         , "email": username.value
                         , "password": password.value 
                         , "city": city.value
                         , "country": country.value
                         , "birth_date": birth_date.toString()};


        // AuthService.register(userInfo)
        //     .then( (response) => { navigate('/login'); })
        //     .catch( (error) => { alert("Error on register: " + error) }); 
        console.log(userInfo);
        UserService.register(userInfo)
            .then( (response) => { navigate('/login'); })
            .catch( (error) => { console.log(error); alert("Error on register: " + error) }); 
    }

    return (
        <div className="background">
            <div className="register">
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <h3>Register</h3>

                        <div className="register-info">
                            {/* <label>Email address</label> */}
                            <input type="first_name" id="first_name" placeholder="First name"/>
                        </div>

                        <div className="register-info">
                            {/* <label>Email address</label> */}
                            <input type="last_name" id="last_name" placeholder="Last name"/>
                        </div>

                        <div className="register-info">
                            {/* <label>Password</label> */}
                            <input type="email" id="username" placeholder="Email"/>
                        </div>

                        <div className="register-info">
                            {/* <label>Password</label> */}
                            <input type="password" id="password" placeholder="Enter password"/>
                        </div>

                        <div className="register-info-div"> 
                            <div className="div-inline">
                                <input type="text" id="country" placeholder="Enter country"/>
                            </div>

                            <div className="div-inline">
                                <input type="text" id="city" placeholder="Enter city"/>
                            </div>
                        </div>


                        <div className="calendar">
                            <input
                                value={date.toLocaleDateString()}
                                onFocus={() => setShowCalendar(true)}
                            />
                            <Calendar 
                                className={showCalendar ? "" : "hide"}
                                value={date}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className="loginButton">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterComponent;