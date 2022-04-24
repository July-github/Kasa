import styled from 'styled-components'
import Colors from '../../utils/style/Colors'
import {Link} from 'react-router-dom'

const ErrorStyledLink = styled(Link)`
    color: ${Colors.primary};
    font-size: 18px;
    margin: auto;

    @media (max-width: 667px) { 
      font-size: 14px;
    } 
`

const ErrorContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`

const ErrorWarning = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;
    padding-top: 50px;
`

const ErrorLinkHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 150px;

    @media (max-width: 667px) { 
      margin-top: 100px;
    } 
`

const ErrorSpan = styled.span`
    color: ${Colors.primary};
    font-size: 288px;
    margin: auto;
    font-weight: bold;

    @media (max-width: 667px) { 
      font-size: 96px;
    }
`

const TextError = styled.p`
    color: ${Colors.primary};
    margin: auto;
    font-size: 36px;
    text-align: center;

    @media (max-width: 667px) { 
      font-size: 18px;
      margin: 30px auto;
    } 
`

function Error() {
    return (
        <ErrorContainer>
            <ErrorWarning>
                <ErrorSpan>
                    404
                </ErrorSpan>
                <TextError>
                    Oups! La page que vous demandez n'existe pas.
                </TextError>
            </ErrorWarning>
            <ErrorLinkHome>
                <ErrorStyledLink to='/'>
                    Retourner sur la page d'accueil
                </ErrorStyledLink>
            </ErrorLinkHome>
        </ErrorContainer>
    );
  }
  
  export default Error;