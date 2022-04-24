import logo from '../../assets/LOGO.svg'
import styled from 'styled-components'
import Colors from '../../utils/style/Colors'
import { StyledLink } from '../../utils/style/LinkStyle'

const HomeLogo = styled.img`
    height: 68px;

    @media (max-width: 667px) { 
        height: 47px;
      }
`

const HeaderContainer = styled.header`
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 40px;

    @media (max-width: 667px) { 
        padding-bottom: 10px;
    }
`

const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 260px;
    font-size: 24px;
    color: ${Colors.primary};
    font-weight: 500;

    @media (max-width: 667px) { 
        font-size: 12px;
        text-transform: uppercase;
        width: 45%;
      }
`

function Header(){
    
    return (
    <HeaderContainer>
        <HomeLogo src={logo}/>
        <NavContainer>
            <StyledLink to='/'>
                Accueil
            </StyledLink>
            <StyledLink to='/About'>
                A Propos
            </StyledLink>
        </NavContainer>
    </HeaderContainer>
)}

export default Header