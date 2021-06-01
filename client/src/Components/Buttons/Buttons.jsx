import React from 'react';
import {Link} from 'react-router-dom';

const Buttons = ({dspTxt, drtn}) => {
    return (
        <div>
            <Link to ={drtn} className="button is-light">{dspTxt}</Link>
        </div>
    );
};

export default Buttons;