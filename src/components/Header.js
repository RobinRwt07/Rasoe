import logo from '../Assest/site-logo.png';
const Header = () => {
    return (
        <header className="header">
            <nav className="navigation">
                <div className="LeftNav">
                    <ul className="list">
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Contact</li></a>
                    </ul>
                </div>
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="Logo" width={60} height={60} />
                    </a>
                </div>
                <div className="RightNav">
                    <ul className="list">
                        <div className="search-bar">
                            <input type="search" placeholder="Search Food" />
                        </div>
                        <a href="#" style={{ flexShrink: 0 }}>
                            <img src={require('../Assest/cart-icon.svg')} alt="Cart-icon" width={30} height={30} />
                        </a>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;