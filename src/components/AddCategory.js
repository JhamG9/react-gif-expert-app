import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            //Categories al principio trae el estado anterior 
            setCategories(categories => [inputValue, ...categories]);
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={inputValue}
                type="text" onChange={(e) => handleInputChange(e)} />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}