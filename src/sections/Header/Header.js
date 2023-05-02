import {Link} from 'react-router-dom'


import './header.css'

import logo from '../../assets/images/logo.png'

import NavItem, {NavItemDropDown} from '../../components/NavItem/NavItem'

const Header = () => {
  return (
    <div className="navbar navbar-expand-md  navbar-dark cyborg-navbar ">
    <div className="container">
        <a href="/" className="navbar-brand">
            <img src={logo} alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
                <NavItem>
                    <Link to="/" className="nav-link">Home</Link>
                </NavItem>
                <NavItem>
                    <a href="/browse" className="nav-link">Browse</a>
                </NavItem>
                <NavItemDropDown>
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Details
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Fortnite</a></li>
                  <li><a class="dropdown-item" href="#">PubG</a></li>
                </ul>
                </NavItemDropDown>
                <NavItem><a href="#faq" className="nav-link">Streams</a></NavItem>
                <NavItem>
                    <Link to="/profile" className="nav-link">Profile</Link>
                </NavItem>
            </ul>
        </div>
    </div>
    
</div>
  )
}


export default Header
