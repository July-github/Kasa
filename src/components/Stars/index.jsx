import PropTypes from 'prop-types'
import styled from 'styled-components'
import Colors from '../../utils/style/Colors'

const Star = styled.i`
    color: #E3E3E3;
    font-size: 30px;
`

const StarsColor = styled.i`
    color: ${Colors.primary};
    font-size: 30px;
`

function Stars({rating}){
    let ratingNumber = Number(rating)
    console.log(ratingNumber, rating)

    for (let i=0; i<ratingNumber; i++){
    if(i > 0 && i<= 5){
        return <StarsColor className='fas fa-star'></StarsColor>

    }else{
        while (i<5){
        return <Star className='fas fa-star'></Star>}
    }}
}

Stars.propTypes = {
    rating: PropTypes.string.isRequired,
}

Stars.defaultProps = {
    rating: '0',
}

export default Stars