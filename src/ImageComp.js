import React from 'react';

function ImageComp({ src }) {

    let imgStyles={

        width:100+"%",
        height:"auto"

    }
    
    return <img src={src} alt="slide-img" style={imgStyles}></img>;
}

export default ImageComp;

