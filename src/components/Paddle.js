import React, { useState, useEffect } from 'react';

function Paddle() {
    //Use state for paddles position
    const [position, setPostion] = useState(0);

    //Define style for paddle
    const paddleStyle = {
        display: 'flex',
        alignItems: 'center',
        justifySelf: 'center',
        width: '60px',
        height: '20px',
        border: '1px solid #000',
        backgroundColor: 'green',
        margin: 'auto',
        position: 'absolute',
        bottom: '10px',
        left: `50%`,
        transform: `translateX(${position}px)`,
        transition: 'transform 0.1s ease',
    };

    //functions for moving paddle
    const moveLeft = () => {
        setPostion((prevPostion) => prevPostion - 10);
    };

    const moveRight = () => {
        setPostion((prevPostion) => prevPostion + 10);
    };

    //Handle key presses
    useEffect(() => {
        //For left arrow key
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                moveLeft();
            }
            //For right arrow key
            else if (e.key === 'ArrowRight') {
                moveRight();
            }
        };

        //Add event listener
        document.addEventListener('keydown', handleKeyDown);

        //Clean up on unmount
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);// Empty dependency array

    //Render paddle
    return (
        <div>
            <div id='paddle' data-testid='paddle' style={paddleStyle}></div>
        </div>
    )

}

export default Paddle;