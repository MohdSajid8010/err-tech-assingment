import "../styles/navbar.css"
import { BsGrid } from "react-icons/bs";
import { useState } from "react";
import { BiMenu, BiExpand } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { FaShoppingBag } from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {

    let navigate = useNavigate()

    const [isClick, setIsClicked] = useState(false);

    return (
        <div className='navbar'>
            <div className='nav_left icon-box'>
                <button onClick={() => navigate("/")}><BsGrid className="" /></button>
                <NavLink to="/">     <span>ShopHub</span></NavLink>


            </div>

            <div className={`${!isClick ? 'mid_nav' : 'mid_nav mid_nav2'}`}>
                <div className="icon-box">
                    <NavLink to="/">Home</NavLink>
                </div>

                <div className="icon-box">

                    <NavLink to="/shop/1">shop</NavLink>
                </div>
                <div className="icon-box">
                    <NavLink to="/contact">contact</NavLink>
                </div>

                <div className="icon-box">
                    <NavLink to="/login">login</NavLink>
                </div>

                <div className="icon-box">
                    <NavLink to="/signup">signup</NavLink>
                </div>

                <div className="icon-box">
                    <NavLink to="/myaccount">myaccount</NavLink>
                </div>

                <div className="nav_right2">
                    <button onClick={() => navigate("/cart")}><FaShoppingBag className="" /></button>
                    {/* <NavLink to="/cart"><FaShoppingBag className="icon" /></NavLink> */}

                </div>




            </div>

            <div className='nav_right'>
                <button onClick={() => navigate("/cart")}><FaShoppingBag className="" /></button>
                {/* <NavLink to="/cart"><FaShoppingBag className="icon" /></NavLink> */}

            </div>

            <div className="menu-icon">
                {!isClick && <BiMenu className="icon" onClick={() => setIsClicked(!isClick)} />}
                {isClick && <FiX className="icon" onClick={() => setIsClicked(!isClick)} />}
            </div>

        </div>
    )
}

export default Nav