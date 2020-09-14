// rafc para crearlo
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);
    // const handleAdd = () => setCategories([...categories, prompt('¿Que categoria quieres añadir?')]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map((category) =>
                        <GifGrid key={category} category={category} />
                    )
                }
            </ol>
        </>
    );
}