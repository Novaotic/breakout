import React from 'react';
import BrickGrid from './BrickGrid.js';
import Paddle from './Paddle.js'

function GameContainer() {

    return (
        <div style={{ gridArea: 'bottom / game / bottom / game', justifyContent: 'center', position: 'relative', width: '100%', height: '80vh', border: '2px solid #000' }}>
            <BrickGrid />

            <Paddle />
        </div>
    )
}

export default GameContainer;