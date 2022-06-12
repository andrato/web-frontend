import React from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../services/UserService';
import {NavLink} from 'react-router-dom';
import '../styles/User.css';
import { useNavigate } from 'react-router';
import CartService from '../services/CartService';

function UserBillingsComponent(props) {

    let { id } = useParams(); 

    const [orders, setOrders] = React.useState([]);
    const navigate = useNavigate();
    const user_id = localStorage.getItem("user_id");
    const is_admin = localStorage.getItem("is_admin");

    React.useEffect(() => { 
        CartService.getAllUserBillings(user_id).then((response) => {
            setOrders(response.data);
        })
    }, []);

    return (
        <div className="all">
            <div className="one">
                <div className="nav">
                    <NavLink to={`/users/${id}`} className="inactive"> Account Info </NavLink>
                    <NavLink to={`/users/${id}/billings`} className="active"> My billings </NavLink>
                    {is_admin!="false" && <div className="line"></div>}
                    {is_admin!="false" &&<NavLink to={`/users/${id}/allusers`} className="inactive"> All users </NavLink>}
                    {is_admin!="false" &&<NavLink to={`/users/${id}/allbillings`} className="inactive"> All billings </NavLink>}
                    <div className="line"></div>
                </div>
                <div className="logout">
                    <NavLink to={`/logout`} className="inactive"> Log out </NavLink>
                </div>
            </div>

            <div className="two" id="user-component" style={{ marginRight: '20px' }}>
            <table>
                    <tr>
                        <th>Order Id</th>
                        <th>No of products</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                    {
                        orders.map(
                            (order, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{order.id}</td>
                                        <td>{order.products.length}</td>
                                        <td>{order.done ? "True" : "False"}</td>
                                        <td>{order.date}</td>
                                    </tr>
                                )
                            }
                        )
                    }
                </table>
            </div>
        </div>
    )
}

export default UserBillingsComponent;