import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from "./GlobalStyled";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Layout } from "./Layout";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {

  state = {
		imageSearch: '',
	}

	onFormSubmit = (imageSearch) => {
		this.setState({ imageSearch })
	}


  render() {


    return (
      <Layout>
        <GlobalStyles />
        <ToastContainer />
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery value={this.state.imageSearch}/>
      </Layout>
  )}
}
