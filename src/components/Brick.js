import React from 'react';
import propTypes from 'prop-types';

// Functional component for represting Bricks
function Brick({ color, isDestroyed }) {

    //Log the received props for debugging
    //console.log('Brick props: ', { color, isDestroyed });

    //Defining the style of brick based on properties
    const brickStyle = {
        width: '50px',
        height: '20px',
        backgroundColor: isDestroyed ? 'transparent' : color,
        border: '1px solid #000',
        margin: '5px',
    };

    //Render Brick
    return <div style={brickStyle}></div>;
}

//propTypes to ensure required props are provided
Brick.propTypes = {
    color: propTypes.string.isRequired, //color of brick
    isDestroyed: propTypes.bool.isRequired, //Flag for brick
};

//Export Brick
export default Brick;