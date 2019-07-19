import React from 'react';

// Using destructuring so that we don't need to type 'props' every time
const Card = ({ id, name, email }) => {

    return (
        //  These are predefined class names from Tachyons:

        // dib = display: inline-block
        // br3 = border-radius: .5rem
        // padding:var(--spacing-medium)
        // margin:var(--spacing-small)
        /* grow =  
            -moz-osx-font-smoothing:grayscale
            backface-visibility:hidden
            transform:translateZ(0)
            transition:transform 0.25s ease-out
        */
       // bw2 = border-width:.25rem
       // shadow-5 = box-shadow:4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;