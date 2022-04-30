import logo from '../../assets/LOGO.svg'
import "../Header/index.css"
import { StyledLink } from '../../utils/style/LinkStyle'


function Header(){
    
    return (
    <header className='headerContainer'>
        <img className='homeLogo' src={logo} alt='Kasa' />
        <nav className='navContainer'>
            <StyledLink to='/'>
                Accueil
            </StyledLink>
            <StyledLink to='/About'>
                A Propos
            </StyledLink>
        </nav>
    </header>
)}

export default Header