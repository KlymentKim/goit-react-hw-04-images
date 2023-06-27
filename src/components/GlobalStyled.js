import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    html {
        box-sizing: border-box;
        width: 100vw;
        overflow-x: hidden;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        color: #212121;
        background-color: #fff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
        height: 100vh;
    }
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }
`;

export default GlobalStyles;