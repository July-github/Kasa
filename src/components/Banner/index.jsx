import Colors from '../../utils/style/Colors'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const HeadWrap = styled.div`
    width: 100%;
    height: 223px;
    margin-bottom: 40px;
    position: relative;

    @media (max-width: 667px) { 
        height: 111px;
        margin-bottom: 10px;
    }
`

const HeadImageWrap = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    position: absolute;

    @media (max-width: 667px) { 
        border-radius: 10px;
    }
`

const HeadImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    position: absolute;
    z-index:1;
    object-fit:cover;

    @media (max-width: 667px) { 
        border-radius: 10px;
    }
`

const HeadOpacity = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background: #000000;
    opacity: 0.3;
    position: absolute;
    z-index: 2;

    @media (max-width: 667px) { 
        border-radius: 10px;
    }
`

const HeadImageText = styled.h1`
    display: flex;
    color: ${Colors.secondary};
    font-size: 48px;
    align-items: center;
    margin: 0;
    position: absolute;
    z-index:2;
    width: 100%;
    height: 100%;
    justify-content: center;

    @media (max-width: 667px) { 
        font-size: 24px;
        justify-content: flex-start;
        margin-left: 20px;
      }
    @media (max-width: 400px) { 
        margin-left: 5px;
    }
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