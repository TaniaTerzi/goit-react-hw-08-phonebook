import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

function LoadingBar() {
    return <RotatingLines
        strokeColor="blueviolet"
        strokeWidth="5"
        animationDuration="1.5"
        width="96"
        visible={true}
    />
}

export default LoadingBar;