import logo from '../logo-1.png'

const Header = () => {
    return(
        <div className="header">
            <img src={logo} className="header-logo" alt="minibus-logo"/>
            <h1>Minibus - ваши лучшие попутчики!</h1>
        </div>
    );
}

export default Header;