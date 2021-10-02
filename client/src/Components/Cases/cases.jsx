import React, { useEffect, useState } from 'react';
import styles from './cases.module.css';
import { AiOutlineArrowUp } from "react-icons/ai";
import { RiArrowDownSFill } from 'react-icons/ri';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';

const Cases = () => {
    const [countrySummary, setCountrySummary] = useState([]);
    const [loader, setLoader] = useState(false);
    useEffect(async () => {
        try {
            let url = `https://api.covid19api.com/summary`
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setCountrySummary(data);
            setLoader(true)
        }
        catch {
        }
    }, []);
    if (loader)
        return (
            <>
                <div className={`${styles.row}`}>
                    <div className={`${styles.col}`}>
                        <div className={`${styles.ascend_descending}`}>
                            <MdArrowDropUp />
                            <MdArrowDropDown />
                        </div>
                        Country
                    </div>
                    <div className={`${styles.col}`}>
                        <div className={`${styles.ascend_descending}`}>
                            <MdArrowDropUp />
                            <MdArrowDropDown />
                        </div>
                        Confirmed

                    </div>
                    <div className={`${styles.col}`}>
                        <div className={`${styles.ascend_descending}`}>
                            <MdArrowDropUp />
                            <MdArrowDropDown />
                        </div>
                        Deaths</div>
                    <div className={`${styles.col}`}>
                        <div className={`${styles.ascend_descending}`}>
                            <MdArrowDropUp />
                            <MdArrowDropDown />
                        </div>
                        Recovered</div>
                </div>


                {
                    countrySummary.Countries.length ? countrySummary.Countries.map(country => (
                        <div className={`${styles.row}`}>
                            <div className={`${styles.col} ${styles.country}`}>
                                <img src={`https://www.countryflags.io/${country.CountryCode}/shiny/24.png`}></img>
                                {country.Country}
                            </div>

                            <div className={`${styles.col}`}>
                                <div>{country.NewConfirmed}<AiOutlineArrowUp /></div>
                                <div>{country.TotalConfirmed}</div>

                            </div>

                            <div className={`${styles.col}`}>
                                <div>{country.NewDeaths}<AiOutlineArrowUp /></div>
                                <div>{country.TotalDeaths}</div>
                            </div>

                            <div className={`${styles.col}`}>
                                <div>{country.NewRecovered}<AiOutlineArrowUp /></div>
                                <div>{country.TotalRecovered}</div>
                            </div>

                        </div>
                    )) : <div></div>

                }

            </>
        )
    else
        return (
            <div></div>
        )
}
export default Cases;