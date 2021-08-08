import React from 'react';
import {Link} from 'react-router-dom';
import '../Buttons/Buttons.css';

const Buttons = ({dspTxt, drtn}) => {
    return (
        <div>
            <Link to ={drtn} className="button is-light hpgbtn">{dspTxt}</Link>
        </div>
    );
};

export default Buttons;