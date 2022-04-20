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
    width: 100%;
    height: 100%
`

function Card({title, cover}){
    return(
            <CardWrap>
                <CardCover src={cover} />
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
  
Card.defaultProps = {
    title: '',
    cover: ''
}

export default Card