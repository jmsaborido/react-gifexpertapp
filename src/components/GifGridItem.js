import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    return (
        <div>
            <img src={url} alt="No hay gif amigo" className="gif"></img>
            <p>{title}</p>
        </div>
    )
}
