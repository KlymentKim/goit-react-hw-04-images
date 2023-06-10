import styled from "styled-components";

export const GalleryImage = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 5px;

    :hover, :focus {
        transform: scale(1.03);
        cursor: zoom-in;
    }
`