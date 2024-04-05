import logo from '../Assest/site-logo.svg';
import { useState } from 'react';
const Header = () => {
    const [toggleBtn, setToggleBtn] = useState("Sign-In");
    return (
        <header className="header">
            <nav className="navigation">
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="Logo" width={60} height={60} />
                    </a>
                </div>
                <div className="nav-items">
                    <ul className="list">
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Contact</li></a>
                        <a href="#" style={{ flexShrink: 0 }}>
                            <img src={require('../Assest/cart-icon.svg')} alt="Cart-icon" width={30} height={30} />
                        </a>
                        <button className='toggle-btn' onClick={() => {
                            (toggleBtn === "Sign-In") ? setToggleBtn("LogIn") : setToggleBtn("Sign-In");
                        }}>{toggleBtn}</button>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;