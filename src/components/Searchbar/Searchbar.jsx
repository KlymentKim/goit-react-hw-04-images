import React, { Component } from "react";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";
import {BsSearch} from 'react-icons/bs'
import { Input, SearchButton, SearchForm, SearchHead } from "./Searchbar.styled";


export class Searchbar extends Component {
    state = {
		searchQuary: '',
    }
    
    handleQuaryChange = e => {
        this.setState({
            searchQuary: e.currentTarget.value.trim().toLowerCase()
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.searchQuary.trim() === '') {
            toast('Введіть пошуковий запит')
        }

        this.props.onSubmit(this.state.searchQuary)
        this.setState({
            searchQuary: ''
        });
    }



    render() {
        return (
            <SearchHead>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchButton type="submit">
                    <BsSearch size='15'/> 
                    </SearchButton>

                    <Input
                    type="text"
                    autocomplete="off"
                    value={this.state.searchQuary}
                    placeholder="Search images and photos"
                    onChange={this.handleQuaryChange}
                    />
                </SearchForm>
            </SearchHead>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}