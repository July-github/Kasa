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
    const ratingNumber = Number(rating)
    console.log(ratingNumber, rating)
    const range = [1, 2, 3, 4, 5]

    range.map((rang) => {
        rang<=ratingNumber ? <StarsColor className='fas fa-star'></StarsColor> : <Star className='fas fa-star'></Star>
    })
}

Stars.propTypes = {
    rating: PropTypes.string.isRequired,
}

Stars.defaultProps = {
    rating: '0',
}

export default Stars