import React from 'react';
import '../Home/Home.css';
import Buttons from '../../Components/Buttons/Buttons.jsx';


const Home = () => {
    return (
        <div className="container is-fullhd" id="page">
            <h1 id="hp-title">Kpop Top 100</h1>
            <div className="columns">
                <div className="column is-half hbtn-div">
                <Buttons drtn="" dspTxt="MEET THE TEAM" className="hbtns"/>
                </div> 
                {/* <div className="column">
                </div>  */}
                <div className="column is-half hbtn-div">
                <Buttons drtn="" dspTxt="GET POPPING" className="hbtns"/>
                </div>
            </div>
        </div>
    );
};

export default Home;