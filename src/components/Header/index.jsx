import logo from '../../assets/LOGO.svg'
import styled from 'styled-components'
import Colors from '../../utils/style/Colors'
import { StyledLink } from '../../utils/style/OtherStyles'

const HomeLogo = styled.img`
    height: 68px;
`

const HeaderContainer = styled.header`
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 40px;
`

const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 260px;
    font-size: 24px;
    color: ${Colors.primary};
    font-weight: 500;
`

function Header(){
    return (
    <HeaderContainer>
        <HomeLogo src={logo}/>
        <NavContainer>
            <StyledLink to='/'>
                Accueil
            </StyledLink>
            <StyledLink to='/APropos'>
                A Propos
            </StyledLink>
        </NavContainer>
    </HeaderContainer>
)}

export default Header