import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer__section1}>
                <div className={styles.container}>
                    <div className={styles.footer__wrapper}>
                        <div className={styles.footer__text}>
                            <h1>Our Instagram</h1>
                            <h2>Follow our store on Instagram</h2>
                            <h3>Follow Us</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer__nav}>
                <div className={styles.container}>
                    <div className={styles.footer__nav__wrapper}>
                        <div className={styles.nav__one}>
                            <p>400 University Drive Suite 200 Coral Gables,
                                FL 33134 USA</p>
                        </div>
                        <div className={styles.nav__two}>
                            <ul>
                                <li>Links</li>
                                <li>Home</li>
                                <li>Shop</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                            <ul>
                                <li>Help</li>
                                <li>Payment Options</li>
                                <li>Returns</li>
                                <li>Privacy Policies</li>
                            </ul>
                            <ul>
                                <li>Newsletter</li>
                                <input type="text" />
                                <button>SUBSCRIBE</button>
                            </ul>
                        </div>
                    </div>
                    <hr style={{margin: "48px 0 35px"}} />
                    <p style={{margin: "35px 0"}}>2022 Meubel House. All rights reverved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;