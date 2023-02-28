import React from 'react'

const Footer = () =>
{
    const year = new Date().getFullYear().toString();

    return (

        <footer>
            <p>@ {year} Some Dumbass Project</p>
        </footer>
    )
}

export default Footer