import LogoFooter from '../../assets/LOGO_footer.svg'
import TextImg from '../../assets/Text_footer.svg'
import styled from 'styled-components'
import Colors from '../../utils/style/Colors'

const FooterDiv = styled.footer`
    background-color: ${Colors.footerBackground};
    height: 80px;
    font-size: 24px;
    color: ${Colors.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0 0 10px;
    margin-top: 30px;
`

const FooterLogo = styled.img`
    height: 25px;
    width: 122px;
    padding-bottom: 20px;
`

const TextFooter = styled.img`
    height: 20px;
    width: 200px;
`

function Footer(){
    return (
        <FooterDiv>
            <FooterLogo src={LogoFooter}/>
            <TextFooter src={TextImg}/>
        </FooterDiv>
    )
}

export default Footer