import React, {useState } from "react"
import PropTypes from 'prop-types';
import { toast } from "react-toastify";
import {BsSearch} from 'react-icons/bs'
import {Input, 
        SearchButton,
        SearchForm,
        SearchHead,
        ToastStyle } from "./Searchbar.styled";


const Searchbar = ({ onSubmit }) => {
    const [searchQuary, setSearchQuary] = useState('');
    const [inputValue, setInputValue] = useState('');
    
    const handleQuaryChange = event => 
    setInputValue(event.currentTarget.value.toLowerCase());

    const handleSubmit = event => {
        event.preventDefault();
        if (inputValue.trim() === '') {
            toast.warning('Введіть пошуковий запит', <ToastStyle />);
        }
        setSearchQuary(searchQuary.trim());
        onSubmit(inputValue);
        setInputValue('');
    };

        return (
            <header>
                <SearchHead>
                    <SearchForm onSubmit={handleSubmit}>
                        <SearchButton type="submit">
                            {/* //icons search */}
                        <BsSearch size='15'/> 
                        </SearchButton>

                        <Input
                        type="text"
                        autocomplete="off"
                        value={inputValue}
                        placeholder="Pixabay: searching images..."
                        onChange={handleQuaryChange}
                        />
                    </SearchForm>
                </SearchHead>
            </header>
        )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
export default Searchbar;