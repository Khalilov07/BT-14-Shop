import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import styles from './homepage.module.css'

const HomePage = () => {
    return (
        <>
            <section className={styles.sofa__section}>
                <div className={styles.container}>
                    <div className={styles.sofa__wrapper}>
                        <div className={styles.sofa__left}>
                            <h1>Rocket single seater</h1>
                            <Link to="/">Shop Now</Link>
                        </div>
                        <div className={styles.sofa__right}>
                            <img src="./images/seater.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.media__section}>
                <div className={styles.container}>
                    <div className={styles.media__wrapper}>
                        <div className={styles.box}>
                            <img src="./images/table.png" alt="" />
                            <h1>Side table</h1>
                            <a href="#">View More</a>
                        </div>
                        <div className={styles.box}>
                            <img src="./images/Cloud sofa.png" alt="" />
                            <h1>Side table</h1>
                            <a href="#">View More</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.furniture__section}>
                <div className={styles.container}>
                    <div className={styles.furniture__wrapper}>
                        <div className={styles.furniture__top}>
                            <h1>Top Picks For You</h1>
                            <h2>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</h2>

                        </div>
                        <div className={styles.furniture__bottom}>
                            <div className={styles.bottom__1}>
                                <img src="./images/pillowsofa.png" alt="" />
                                <h3>Trenton modular sofa_3</h3>
                                <h2>Rs. 25,000.00</h2>

                            </div>

                            <div className={styles.bottom__2}>
                                <img src="./images/diningtable.png" alt="" />
                                <h3>Granite dining table with dining chair</h3>
                                <h2>Rs. 25,000.00</h2>
                            </div>

                            <div className={styles.bottom__3}>
                            <img src="./images/bar_table.png" alt="" />
                            <h3>Outdoor bar table and stool</h3>
                            <h2>Rs. 25,000.00</h2>
                            </div>
                             
                            <div className={styles.bottom__3}>
                            <img src="./images/Plainconsole.png" alt="" />
                            <h3>Plain console with teak mirror</h3>
                            <h2>Rs. 25,000.00</h2>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    );
};

export default HomePage;