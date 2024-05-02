import React, { useState } from "react";
import Select from 'react-select';
import "./Header1.css";

const Header1 = () => {
    const [open, setOpen] = useState(false);
    return (
        <header>
        <div className="header-nav">
            <div className="logo">
                <a href="#">
                    <img src='./logo2.png' alt='logo' className="logo" width={100} />
                    </a>
            </div>
            <ul className="header-menu-bar">
               <li>
               <div className="searchWrapper">
                            <span role="button" >
                                <div className="dropdown-search-menu" id="dropdownSearchMenu">
                                <span className="dropdown-search-icon">
                                    <svg fill="#69728C" width="24" height="24" viewBox="0 0 1024 1024" >
                                        <path d="M755.499 695.168l128 128c7.41 7.665 11.977 18.12 11.977 29.641 0 23.564-19.103 42.667-42.667 42.667-11.521 0-21.976-4.567-29.653-11.989l0.012 0.012-128-128c-7.41-7.665-11.977-18.12-11.977-29.641 0-23.564 19.103-42.667 42.667-42.667 11.521 0 21.976 4.567 29.653 11.989l-0.012-0.012zM426.667 85.333c188.513 0 341.333 152.82 341.333 341.333s-152.82 341.333-341.333 341.333v0c-188.513 0-341.333-152.82-341.333-341.333s152.82-341.333 341.333-341.333v0zM426.667 170.667c-141.385 0-256 114.615-256 256s114.615 256 256 256v0c141.385 0 256-114.615 256-256s-114.615-256-256-256v0z"></path>
                                    </svg>
                                </span>
                                <span>Search</span>
                                <span className="dropdown-menu-list" onClick={()=>setOpen(!open)}>
                                    
                                    <svg  fill="#69728C" width="16" height="16" viewBox="0 0 1024 1024">
                                        <path d="M222.080 350.080c8.687-8.689 20.688-14.063 33.945-14.063 10.737 0 20.65 3.525 28.646 9.482l-0.127-0.091 5.376 4.672 222.080 222.016 222.080-222.080c8.683-8.667 20.67-14.026 33.908-14.026 10.753 0 20.68 3.536 28.682 9.508l-0.126-0.090 5.376 4.672c8.689 8.687 14.063 20.688 14.063 33.945 0 10.737-3.525 20.65-9.482 28.646l0.091-0.127-4.672 5.376-256 256c-8.687 8.689-20.688 14.063-33.945 14.063-10.737 0-20.65-3.525-28.646-9.482l0.127 0.091-5.376-4.672-256-256c-8.674-8.684-14.038-20.676-14.038-33.92s5.364-25.236 14.038-33.921l-0.001 0.001z"></path>
                                    </svg>
                                    
                                
                                {open && (
                                    
                                <ul  className="dropdown-menu-list-items">
                                    <li className="dropdown-search-menu-header">Buyers can</li>
                                    <li>
                                        <a href="" role="button" className="dropdown-search-menu-button"></a>Search
                                        <span className="dropdown-item-search-menu-list"> offers</span>
                                        <span className="dropdown-item-search-menu-description">to buy now</span>
                                    </li>
                                    <li>
                                        <a href="" role="button" className="dropdown-search-menu-button">Search
                                        <span className="dropdown-item-search-menu-list"> freelancers</span>
                                        <span className="dropdown-item-search-menu-description">to request a proposal</span>
                                        </a>
                                    </li>
                                    <li className="dropdown-search-menu-header">Freelancers can</li>
                                    <li>
                                        <a href="" role="button" className="dropdown-search-menu-button">Search
                                        <span className="dropdown-item-search-menu-list"> projects</span>
                                        <span className="dropdown-item-search-menu-description">to quote on</span>
                                        </a>
                                    </li>
                                </ul>
                                )}
                                </span>
                                
                            </div>
                        </span>
                        </div>
                </li> 
                <li>
                    <a href="" className="header-menu-link-item" >HOW IT WORKS</a>
                </li>
                <li className="separator"></li>
                <li> 
                        <a className="header-menu-link-item" href="" >lOGIN</a> 
                        </li>
                    <li>
                        <a className="header-menu-link-item" href="" >SIGN UP</a>
                    </li>
                    <li>
                        <a className="header-menu-link-item freelance" href="" >FREELANCER?</a>
                </li>
            </ul>
            
           <div href="" className="toggle-btn" onClick={() => setOpen(!open)}> 
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
            </svg>
              
            </div> 
            </div> 
        <div className={`dropdown-toggle ${open ? 'open' : ''}`}>
            <nav className="navigation">
                <ul className="dropdown-toggle-menu">
                    <li>
                    <div className="toggle-menu-search">
                        <span className="menu-search-icon">
                            <svg fill="#69728C" width="24" height="24" viewBox="0 0 1024 1024">
                                <path d="M755.499 695.168l128 128c7.41 7.665 11.977 18.12 11.977 29.641 0 23.564-19.103 42.667-42.667 42.667-11.521 0-21.976-4.567-29.653-11.989l0.012 0.012-128-128c-7.41-7.665-11.977-18.12-11.977-29.641 0-23.564 19.103-42.667 42.667-42.667 11.521 0 21.976 4.567 29.653 11.989l-0.012-0.012zM426.667 85.333c188.513 0 341.333 152.82 341.333 341.333s-152.82 341.333-341.333 341.333v0c-188.513 0-341.333-152.82-341.333-341.333s152.82-341.333 341.333-341.333v0zM426.667 170.667c-141.385 0-256 114.615-256 256s114.615 256 256 256v0c141.385 0 256-114.615 256-256s-114.615-256-256-256v0z"></path>
                            </svg>
                        </span>
                        <span>SEARCH</span>
                        <svg fill="#69728C" width="16" height="16" viewBox="0 0 1024 1024">
                            <path d="M350.080 222.080c8.687-8.689 20.688-14.063 33.945-14.063 10.737 0 20.65 3.525 28.646 9.482l-0.127-0.091 5.376 4.672 256 256c8.689 8.687 14.063 20.688 14.063 33.945 0 10.737-3.525 20.65-9.482 28.646l0.091-0.127-4.672 5.376-256 256c-8.673 8.607-20.619 13.927-33.808 13.927-26.51 0-48-21.49-48-48 0-10.681 3.489-20.547 9.388-28.521l-0.092 0.13 4.672-5.376 222.016-222.080-222.080-222.080c-8.667-8.683-14.026-20.67-14.026-33.908 0-10.753 3.536-20.68 9.508-28.682l-0.090 0.126 4.672-5.376z"></path>
                        </svg>
                    </div>
                    </li>
                    <li><a href="">HOW IT WORKS</a></li>
                    <li><a href="">LOGIN</a></li>
                    <li><a href="">SIGN UP</a></li>
                    <li><a href="" className="freelance">FREELANCER?</a></li>
                </ul>
            </nav>
        </div>
        </header>

    
    )
}
export default Header1;