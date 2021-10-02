import React from 'react';
import styles from './home.module.css';
import Cases from '../Cases/cases';
const Home = () => {
    return (
        <>
            <div className={`${styles.container}`}>
                <div className={`${styles.header}`}>Covid 19</div>
                <div className={`${styles.searchbar}`}>
                    <input type="search" name="" id="" placeholder="Search by country..." />
                </div>
                <div className={`${styles.cases}`}>
                    <Cases />
                </div>
            </div>
        </>
    )
}
export default Home;