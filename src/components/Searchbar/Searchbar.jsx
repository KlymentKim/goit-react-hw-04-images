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
    
    const handleQuaryChange = event => setInputValue(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        setSearchQuary(inputValue.trim());
        onSubmit(searchQuary);

        if (inputValue.trim() === '') {
            toast.warning('Введіть пошуковий запит', <ToastStyle />);
        }
        // setSearchQuary(`${''}`);
    
       
        // event.target.reset();
    }

        return (
            <header>
                <SearchHead>
                    <SearchForm onSubmit={handleSubmit}>
                        <SearchButton type="submit">
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