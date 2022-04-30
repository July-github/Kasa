import LogoFooter from '../../assets/LOGO_footer.svg'
import TextImg from '../../assets/Text_footer.svg'
import "../Footer/index.css"

function Footer(){
    return (
        <footer className='footerDiv'>
            <img className='footerLogo' src={LogoFooter} alt='Kasa' />
            <img className='textFooter' src={TextImg} alt='rights' />
        </footer>
    )
}

export default Footer