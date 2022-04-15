import { createGlobalStyle } from "styled-components";

const BodyGlobalStyle = createGlobalStyle`
    *{
        font-family: Montserrat, sans-serif;
        font-weight: 500;
    }
    header, section{
        margin: 40px 100px;
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