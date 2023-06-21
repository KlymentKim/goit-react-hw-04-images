import React, {useState } from "react";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";
import {BsSearch} from 'react-icons/bs'
import { Input, SearchButton, SearchForm, SearchHead } from "./Searchbar.styled";


export const Searchbar = ({ onSubmit }) => {
    const [searchQuary, setQuary] = useState('');

    
    const handleQuaryChange = e => {
        setQuary(e.currentTarget.value.trim().toLowerCase())
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (searchQuary.trim() === '') {
            toast('Введіть пошуковий запит')
        }

        onSubmit(searchQuary)
        setQuary('');
    }

        return (
            <SearchHead>
                <SearchForm onSubmit={handleSubmit}>
                    <SearchButton type="submit">
                    <BsSearch size='15'/> 
                    </SearchButton>

                    <Input
                    type="text"
                    autocomplete="off"
                    value={searchQuary}
                    placeholder="Search images and photos"
                    onChange={handleQuaryChange}
                    />
                </SearchForm>
            </SearchHead>
        )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}