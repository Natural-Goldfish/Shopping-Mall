import React from 'react';
import '../Styles/Header.css';
import Navigation2 from './Navigation2';

function Header() {
    function anchorListner(e){
        e.preventDefault();
        if(e.button === 0){
            console.log("Left click");
        }
    }
    return(
        <div className="headerWrap">
            <div className="headerTop">
                <h1 className="headerLogo">
                    <img className="logoImage" src="/images/1.jpg" alt="temp" width="100px" />
                </h1>
                <div className="searchBar">
                    <form>
                        <input type="text" placeholder="What are you looking for?" />
                        <span type="span">click</span>
                    </form>
                </div>
                <div className="util">
                    <ul className="utilList">
                        <li className="utilListItem">
                            <a href="/Temp2" onClick={anchorListner} >Sign In</a>
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
                <Navigation2 />
            </nav>
        </div>
    );
}

export default Header;