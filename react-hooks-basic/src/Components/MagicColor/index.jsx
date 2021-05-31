import React from 'react';
import PropTypes from 'prop-types';
import '../MagicColor/index.css';
import useMagicColor from '../../hooks/useMagicColor';
MagicColor.propTypes = {

};

function MagicColor(props) {
    const color = useMagicColor();
    return (
        <div className="box-color" style={{ backgroundColor: color }}>

        </div>
    );
}

export default MagicColor;