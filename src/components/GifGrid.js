import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=Rick+And+Morty&limit=10&api_key=${process.env.REACT_APP_API_KEY}`;
        const respuesta = await fetch(url);
        const { data } = await respuesta.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        setImages(gifs);
    }

    return (
        <div>
            <h3>{category}</h3>
            <ol>{
                images.map((img) =>
                    <GifGridItem key={img.id} {...img} />
                )
            }</ol>
        </div>
    )
}
