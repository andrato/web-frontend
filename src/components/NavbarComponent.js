import React from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import {Link, NavLink} from 'react-router-dom';
import {FiUser, FiShoppingCart} from "react-icons/fi";
import Logo from '../assets/logo4.png';
import "../styles/NavbarStyle.css";
import CategoryService from '../services/CategoryService';
import AnimalService from '../services/AnimalService';

function NavbarComponent(props) {

    const [categs, setCategories] = React.useState([]);
    // const [animal, setAnimal] = React.useState({});
    const [animals, setAnimals] = React.useState([]);

    React.useEffect(() => { 
        CategoryService.getCategories().then((response) => {
            setCategories(response.data)
        })
    }, []);

    React.useEffect(() => { 
        AnimalService.getAnimals().then((response) => {
            setAnimals(response.data)
        })
    }, []);

    // function handleClick(selectedAnimal) {
    //     setAnimal(selectedAnimal);
    // }

    return (
        <div>
        <div className="navbar">
            <div className="leftSide">
                <Link to="/">
                    <img src={Logo} alt="logo"></img>
                </Link>
            </div>
            <div className="rightSide">
                { 
                    animals.map(
                        (animal, key) => {
                            return <NavLink to={`/animals/${animal.id}`} key={key}> {animal.name} </NavLink>
                        }
                    )
                }
                <button>
                    <ReorderIcon />
                </button>
            </div>
            <div className="endNav" id="beforeIcons">
                <Link to={'/cart'}> <FiShoppingCart /> </Link>
            </div> 
            <div className="endNav" id="afterIcons">
                <Link to={'/login'}> <FiUser /> </Link>
            </div>  
        </div>
        { animals.length && 
        <div className="sub-menu">
            <div className="sub-nav">
                { 
                    categs.map(
                        (category, key) => {
                            return <NavLink to={`/categories/${category.id}`} key={key}> {category.name} </NavLink>
                        }
                    )
                }
            </div>  
        </div>
        }
        </div>
    )
}

export default NavbarComponent;