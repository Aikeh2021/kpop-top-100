import React from 'react';
import '../Team/Team.css';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import VioletLine from '../../Components/VioletLine/VioletLine.jsx';


const Team = () => {
    return (
        <div className="container is-fullhd" id="teampg">
            <Navbar />
            <h1 id="teams-title">Kpop Top 100</h1>
            <VioletLine />
        </div>
    );
};

export default Team;