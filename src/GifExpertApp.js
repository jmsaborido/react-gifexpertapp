// rafc para crearlo
import React, { useState } from 'react';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => setCategories([...categories, prompt('¿Que categoria quieres añadir?')]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map((category) => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    );
}