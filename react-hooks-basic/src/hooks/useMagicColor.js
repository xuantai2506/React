import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

useMagicColor.propTypes = {};
function randomColor(newColor) {
    const listColor = ['red', 'green', 'yellow', 'blue', 'black', 'pink'];
    const lengthList = listColor.length;
    const currentRef = listColor.indexOf(newColor);
    var indexRandom = Math.ceil(Math.random() * (lengthList - 1));

    while (currentRef === indexRandom) {
        indexRandom = Math.ceil(Math.random() * (lengthList - 1));
    }

    return listColor[indexRandom];
}
function useMagicColor(props) {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');

    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(colorRef.current);
            setColor(newColor);
            colorRef.current = newColor;
        }, 1000)
        return () => {
            console.log("componentWillUnMount");
            clearInterval(colorInterval);
        }
    }, []);

    return color;
}

export default useMagicColor;