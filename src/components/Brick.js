import React from 'react';
import propTypes from 'prop-types';

function Brick({ color, isDestroyed }) {
    
    console.log('Brick props: ', { color, isDestroyed });
    const brickStyle = {
        width: '50px',
        height: '20px',
        backgroundColor: isDestroyed ? 'transparent' : color,
        border: '1px solid #000',
        margin: '5px',
    };

    return <div style={brickStyle}></div>;
}
Brick.propTypes = {
    color: propTypes.string.isRequired,
    isDestroyed: propTypes.bool.isRequired,
};


export default Brick;