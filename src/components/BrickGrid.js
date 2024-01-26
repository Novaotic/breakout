import React from 'react';
import Brick from './Brick.js';

function BrickGrid() {
    const easy = {
        rows: 5,
        columns: 8,
    }

    const medium = {
        rows: 6,
        columns: 10,
    }

    const hard = {
        rows: 7,
        columns: 12,
    }

    const generateBricks = (difficulty) => {
        const bricks = []
        for (let i = 0; i < difficulty.rows; i++) {
            const row = [];
            for (let j = 0; j < difficulty.columns; j++) {
                row.push(<Brick key={`${i}-${j}`} color="blue" isDestroyed={false} />)
            }
            bricks.push(row);
        }
        return bricks;
    };

    return (
        <div>
            {generateBricks(easy).map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex' }}>
                    {row}
                </div>
            ))}
        </div>
    )

}

export default BrickGrid;