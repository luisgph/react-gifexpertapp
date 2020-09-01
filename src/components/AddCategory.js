import React,{ useState } from 'react'
import  PropTypes  from "prop-types";

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const inputHandleValue=(e) =>{
        setInputValue(e.target.value);
    };

    const submitEventHandle=(e) =>{
        e.preventDefault();

        if (inputValue.length > 2) {
            setCategories(cats => [inputValue,...cats]);
            setInputValue('');
        }
    };



    return (
        <form onSubmit={submitEventHandle}>
            <input
                type="text"
                value={inputValue}
                onChange={ inputHandleValue }
                ></input>
        </form>
    )
}


AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}