import React from 'react';

const RenderMap = props => {

    return <div className = {'map ${props.className}'} style = {props.style}></div>;
};

export default RenderMap;