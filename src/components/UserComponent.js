import React from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../services/UserService';
import {NavLink} from 'react-router-dom';
import '../styles/User.css';
import { useNavigate } from 'react-router';

function UserComponent(props) {

    let { id } = useParams(); 

    const [user, setUser] = React.useState('');
    const navigate = useNavigate();
    const is_admin = localStorage.getItem("is_admin");


    React.useEffect(() => { 
        UserService.getUserById(id).then((response) => {
            setUser(response.data);
        })
    }, [id]);

    function handleUpdate() {
        navigate(`/users/${id}/form`);
    }

    return (
        <div className="all">
            <div className="one">
                <div className="nav">
                    <NavLink to={`/users/${id}`} className="active"> Account Info </NavLink>
                    <NavLink to={`/users/${id}/billings`} className="inactive"> My billings </NavLink>
                    {is_admin!="false" && <div className="line"></div>}
                    {is_admin!="false" &&<NavLink to={`/users/${id}/allusers`} className="inactive"> All users </NavLink>}
                    {is_admin!="false" &&<NavLink to={`/users/${id}/allproducts`} className="inactive"> All products </NavLink>}
                    {is_admin!="false" &&<NavLink to={`/users/${id}/allbillings`} className="inactive"> All billings </NavLink>}
                    <div className="line"></div>
                </div>
                <div className="logout">
                    <NavLink to={`/logout`} className="inactive"> Log out </NavLink>
                </div>
            </div>

            <div className="two" id="user-component">
                {
                    <div>
                        <h2> Basic Info </h2>
                        <pre >First Name: <span> {user.firstName} </span>  </pre>
                        <pre >Last Name: <span> {user.lastName} </span>  </pre>
                        <pre >Username:  <span> {user.username} </span>  </pre>
                        <pre >City:             <span> {user.city} </span>  </pre>
                        <pre >Country:      <span> {user.country} </span>  </pre>
                        <pre >Birth Date:  <span> {user.birth_date} </span>  </pre>
                    </div>
                }
                <div>

                </div>
                <div className="userButton">
                    <button className="loginButton" onClick={handleUpdate}>UPDATE</button>
                </div>
            </div>
        </div>
    )
}

export default UserComponent;