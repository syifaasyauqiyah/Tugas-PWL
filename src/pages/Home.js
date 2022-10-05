import React from "react";
import Header from "../component/Header";
import Button from "../component/Button";
import { Link } from "react-router-dom";
import style from '../styles/buttonStyles.module.css';

class Home extends React.Component {
    render () {
        return(
            <>
            <Header/>
            <div className={style.container}>
                <h2 className={style.text_kategori}> Klik Disini </h2>
                <Link className={style.text_kategori} to={`/calculator`}>
                        <Button label="Tekan"/>
                </Link>
            </div>
            </>
        )
    };
}

export default Home;