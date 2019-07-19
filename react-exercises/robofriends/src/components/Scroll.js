import React from 'react';

const Scroll = (props) => {
    return (
        // When using the inline style in JSX
        // we must use double curly brackets, because we are making an object
        // with different style attributes
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '70vh'}}>
            {props.children}
        </div>
    );
}

export default Scroll;