import React from 'react';

function Pizza(props) {
    console.log("I am coming from app.js", props);
    return (
        // JSX - Javascript XML
        // React.createElement(div, ...)

        <div class='pizza'>
            <h1>{props.brand.toUpperCase()}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Pizza;
