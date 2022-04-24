import { createGlobalStyle } from "styled-components";
import "@fontsource/montserrat";

const BodyGlobalStyle = createGlobalStyle`
    *{
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
    }

    header, section{
        margin: 40px 100px;

        @media (max-width: 1019px) { 
            margin: 15px 60px;
        } 

        @media (max-width: 667px) { 
            margin: 15px 30px;
        } 
        @media (max-width: 320px) { 
            margin: auto;
        } 
    }
    
    body{
        margin: 0;
    }
`


function GlobalStyle(){
    return (
        <BodyGlobalStyle/>
    )
}

export default GlobalStyle