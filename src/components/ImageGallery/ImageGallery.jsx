import { useEffect, useState, useLayoutEffect } from 'react'
import React from 'react';
import PropTypes from 'prop-types';
import { fetchPixabayApi } from '../Api/Api';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ErrorMessage, GalleryList, ListItem } from './ImageGallery.styled';
import { LoadMore } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

export const ImageGallery = ({value}) =>{
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hits, setHits] = useState(0);

    useEffect(() => {
        if (!value) {
            return
        }

        const fetchImages = async (query, currentPage) => {   
            try {
                setLoading(true);
                const resp = await fetchPixabayApi(query, currentPage);

                if (!resp || resp.hits.length === 0) {
                    setImages([])
                    setError('Sorry, there are no images matching your search query. Please try again.')
                    return
                }
                
                setImages(prevState => (page === 1) ? [...resp.hits] : [...prevState, ...resp.hits]);
                setError(null);
                setHits(resp.totalHits);
                }
                catch (err) {
                    setError(String(err));
                }
                finally {
                    setLoading(false)
                }
        }
    
        fetchImages(value.trim(), page);
    }, [value, page]);

    useEffect(() => {
        setImages([]);
        setPage(1);
    }, [value]);

    useLayoutEffect(() => {
        if(page > 1) {
            window.scrollTo({
            left: 0,
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
        }
    }, [images, page]);



    const loadMore = () => {
        setPage(prevPage => prevPage + 1)
    }

    const PER_PAGE = 12;

        return (
            <>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <GalleryList>
                {images.length > 0 && 
                images.map(image => (
                    <ListItem key={image.id}>
                        <GalleryItem image={image}/>
                    </ListItem>
                    
                ))}
            </GalleryList>
                
            {PER_PAGE < hits && (
                <LoadMore handleClick={loadMore} />
            )}
            {isLoading && <Loader/>}
            </>
        )
}

ImageGallery.propTypes = {
    value: PropTypes.string.isRequired
}