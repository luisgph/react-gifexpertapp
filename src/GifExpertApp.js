import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['one punch']);

    // const handleAdd = () =>{

        // setCategories([...categories,'HunterXHunter']);
        // setCategories(['HunterXHunter',...categories]);
        // setCategories(cats => [...cats,'HunterXHunter']);
    // };

    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories = {setCategories}></AddCategory>
            <hr></hr>
            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                        key={category}
                        category={category}></GifGrid>
                    )
                }
            </ol>
        </>
    );

};

export default GifExpertApp;