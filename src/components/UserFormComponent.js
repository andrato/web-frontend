import React from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../services/UserService';
import {NavLink} from 'react-router-dom';
import '../styles/User.css';
import { useNavigate } from 'react-router';

function UserFormComponent(props) {

    let { id } = useParams(); 

    const [user, setUser] = React.useState('');
    const navigate = useNavigate();
    const is_admin = localStorage.getItem("is_admin");


    React.useEffect(() => { 
        UserService.getUserById(id).then((response) => {
            setUser(response.data);
        })
    }, [id]);


    function handleSubmit(e) {
        e.preventDefault();
        const {last_name, first_name, city, country} = e.target.elements;

        if(last_name.value) {
            user.lastName = last_name.value;
        }
        if(first_name.value){
            user.firstName = first_name.value;
        }
        if(city.value){
            user.city = city.value;
        }
        if(country.value){
            user.cicountryty = city.country;
        }

        const userInfo = { "id": user.id
                         , "firstName": user.firstName
                         , "lastName": user.lastName
                         , "username": user.email
                         , "email": user.email 
                         , "city": user.city
                         , "country": user.country
                         , "birth_date": user.birth_date};

        // console.log("este pe submit in update");
        console.log(JSON.stringify(userInfo));

        UserService.update(user.id, userInfo)
        .then( (response) => { navigate(`/users/${id}`); /*navigate('/login');*/})
        .catch( (error) => { alert(error); console.log(error)}); //"Could not register! Please try again!",
    }

    return (
        <div className="all">
            <div className="one">
                <div className="nav">
                    <NavLink to={`/users/${id}`} className="inactive"> Account Info </NavLink>
                    <NavLink to={`/users/${id}/billings`} className="inactive"> My billings </NavLink>
                    {is_admin!="false" && <div className="line"></div>}
                    {is_admin!="false" &&<NavLink to={`/users/${id}/allusers`} className="inactive"> All users </NavLink>}
                    {is_admin!="false" &&<NavLink to={`/users/${id}/allbillings`} className="inactive"> All billings </NavLink>}
                    <div className="line"></div>
                </div>
                <div className="logout">
                    <NavLink to={`/logout`} className="inactive"> Log out </NavLink>
                </div>
            </div>

            <div id="altceva">
                <form onSubmit={handleSubmit}>
                    {
                        <div>
                            <div>
                                <label>First name: </label>
                                <input className="update" id="first_name" placeholder={user.firstName}/>
                            </div>
                            <div>
                                <label>Last name: </label>
                                <input className="update" id="last_name" placeholder={user.lastName}/>
                            </div>
                            <div>
                                <label>Country: </label>
                                <input className="update" id="country" placeholder={user.country}/>
                            </div>
                            <div>
                                <label>City: </label>
                                <input className="update" id="city" placeholder={user.city}/>
                            </div>
                        </div>
                    }
                    <button id="butonUpdate" type="submit" className="loginButton">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default UserFormComponent;