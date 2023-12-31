import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ fetchData }) => {

    const savedRecipe = JSON.parse(localStorage.getItem('saveRecipe'));
    const [timeOutId, setTimeOutId] = useState();

    const onSearchHanler = (event) => {
        event.preventDefault();
        clearTimeout(timeOutId)
        const timeOut = setTimeout(() => {
            fetchData(event.target.value)
        }, 500)
        setTimeOutId(timeOut)
    }

    let count = 0;
    if (savedRecipe) {
        for (let i = 0; i < savedRecipe.length; i++) {
            count++;
        }
    }



    return (
        <nav className="navbar bg-dark border-bottom navbar-expand-lg border-body" data-bs-theme="dark">
            <div className="container container-fluid p-2">
                <Link className="navbar-brand logo" to={'/'}>
                    <img src="https://raw.githubusercontent.com/ayushkul/react-recipe-finder/3e782083c58c0d3f6993dedeaab401b303353a00/public/hamburger.svg" alt="Logo" width="50" height="50" className="d-inline-block align-center" />
                    <h2>Recipe Finder</h2>
                </Link>
                <div className=" navbar-collapse text-light" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/saved'} type="button" class="btn btn-primary position-relative">
                                Cart
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {count}
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            onChange={onSearchHanler}
                            className="form-control me-5 p-3 w-200"
                            type="search" placeholder="Search"
                            aria-label="Search" />
                    </form>
                </div>
            </div>
        </nav >
    )
}

export default Header