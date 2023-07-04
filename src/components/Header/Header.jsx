import React from 'react';
import styles from './header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                <div className={styles.icons__links}>
                    <img src="./images/account.png" alt="" />
                    <img src="./images/search.png" alt="" />
                    <img src="./images/heart.png" alt="" />
                    <img src="./images/basket.png" alt="" />
                </div>

            </nav>
        </header>
    );
};

export default Header;