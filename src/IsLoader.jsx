import React from 'react'
import pacman from './assest/pacman-1s-200px.gif'

const IsLoader = () => {
    return (
        <div className='loader'>
            <img className='pacman' src={pacman} />
            <p>We are almost there...</p>
        </div>
    )
}

export default IsLoader