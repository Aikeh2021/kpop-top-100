import React from 'react';
import '../Home/Home.css';
import Buttons from '../../Components/Buttons/Buttons.jsx';


const Home = () => {
    return (
        <div className="container container is-fullhd" id="page">
            <h1 id="hp-title">Kpop Top 100</h1>
            <div className="row">
                <div className="column is-half">
                <Buttons drtn="" dspTxt="MEET THE TEAM"/>
                </div>
                {/* <div className="column">
                </div> */}
                <div className="column is-half">
                <Buttons drtn="" dspTxt="GET POPPING"/>
                </div>
            </div>
        </div>
    );
};

export default Home;