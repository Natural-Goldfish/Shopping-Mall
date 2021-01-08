import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Header.css'


function Header() {
    return(
        <div className="headerWrap">
            <div className="headerTop">
                <h1 className="headerLogo">
                    <img className="logoImage" src="/images/1.png" alt="temp" width="100px" />
                </h1>
                <div className="searchBar">
                    <input type="text" placeholder="What are you looking for?" />
                    <button type="button" />
                </div>
                <div className="util">
                    <ul className="utilList">
                        <li className="utilListItem">
                            <a href="#" >Sign In</a>
                        </li>
                        <li className="utilListItem">
                            <a href="#">Sign Out</a>
                        </li>
                        <li className="utilListItem">
                            <a href="#">Temp</a>
                        </li>
                    </ul>
                </div>
            </div>
            <nav className="headerNav">
                <ul className="headerNavList">
                    <li className="headerNavListItem">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="headerNavListItem">
                        <Link to="/Men">Men</Link>
                    </li>
                    <li className="headerNavListItem">
                        <Link to="/Women">Women</Link>
                    </li>
                    <li className="headerNavListItem">
                        <Link to="/Kids">Kids</Link>
                    </li>
                    <li className="headerNavListItem">
                        <Link to="/Acc">Acc</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;