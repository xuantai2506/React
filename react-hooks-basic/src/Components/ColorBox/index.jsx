import React, { useState } from 'react';
import './ColorBox.css';
ColorBox.propTypes = {

};

function getColorRandom() {
    const COLOR_LIST = ['green', 'yellow', 'red', 'black', 'blue'];
    const random_index = Math.trunc(Math.random() * 5);
    return COLOR_LIST[random_index];
}
function ColorBox() {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('color') || "pink";
        return initColor;
    });

    function handleBoxClick() {
        const newColor = getColorRandom();
        setColor(newColor);
        localStorage.setItem('color', newColor);
    }

    return (
        <div
            className="color-box"
            style={{ background: color }}
            onClick={handleBoxClick}
        >
            Color Box
        </div>
    );
}

export default ColorBox;