import Colors from '../../utils/style/Colors'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const HeadWrap = styled.div`
    width: 100%;
    height: 223px;
    margin-bottom: 40px;
    position: relative;
`

const HeadImageWrap = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    position: absolute;
`

const HeadImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    position: absolute;
    z-index:1;
    object-fit:cover;
`

const HeadOpacity = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background: #000000;
    opacity: 0.3;
    position: absolute;
    z-index: 2;
`

const HeadImageText = styled.h1`
    display: flex;
    color: ${Colors.secondary};
    font-size: 48px;
    align-items: center;
    justify-content: center;
    margin: 0;
    position: absolute;
    z-index:2;
    width: 100%;
    height: 100%;
`

function Banner({headText, headImage, headImageAlt}){

    return (
        <HeadWrap>
            <HeadImageWrap>
                <HeadOpacity></HeadOpacity>
                <HeadImage src={headImage} alt={headImageAlt} />
            </HeadImageWrap>
            <HeadImageText>{headText}</HeadImageText>
        </HeadWrap>
    )
}

Banner.propTypes = {
    headText: PropTypes.string,
    headImage: PropTypes.string.isRequired,
    headImageAlt : PropTypes.string.isRequired
}

Banner.defaultProps = {
    headText: ''
}

export default Banner