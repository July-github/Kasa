import styled from 'styled-components'
import Colors from '../../utils/style/Colors'
import PropTypes from 'prop-types'

const CardTitle = styled.h2`
    color: ${Colors.secondary};
    font-size: 18px;
    text-align: left;
    padding-left: 15px;
    position: absolute;
    bottom: 0;
`

const CardCover = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit:cover;
`

const CardWrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%
`

const CardOpacity = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(123,42,44);
    background: linear-gradient(0deg, rgba(123,42,44,0.8) 0%, rgba(0,255,255,0) 20%);
    opacity: 0.3;
    border-radius: 10px;
    position: absolute;
`

function Card({title, cover}){
    return(
        <CardWrap>
            <CardOpacity></CardOpacity>
            {cover? <CardCover src={cover} />
            : null
            }
            <CardTitle>
                {title}
            </CardTitle>
        </CardWrap>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
}

export default Card