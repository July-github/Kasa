import styled from 'styled-components'
import Colors from '../../utils/style/Colors'
import {Link} from 'react-router-dom'


const ErrorStyledLink = styled(Link)`
    color: ${Colors.primary};
    font-size: 18px;
    margin: auto;
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
`
const ErrorLinkHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 30%;
`

const ErrorSpan = styled.span`
    color: ${Colors.primary};
    font-size: 288px;
    margin: auto;
    font-weight: bold;
`
const TextError = styled.p`
    color: ${Colors.primary};
    margin: auto;
    font-size: 36px;
    text-align: center;
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