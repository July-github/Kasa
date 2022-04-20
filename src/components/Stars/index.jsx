import PropTypes from 'prop-types'
import styled from 'styled-components'
import Colors from '../../utils/style/Colors'
import { IoStarSharp } from 'react-icons/io5'

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
    const range = [1, 2, 3, 4, 5]
 
    return (
        <div>
            {range.map((rank) => (
                rank<=ratingNumber ? <StarsColor key={rank}><IoStarSharp /></StarsColor> : <Star key={rank}><IoStarSharp /></Star>
            ))}
        </div>
    )
}

Stars.propTypes = {
    rating: PropTypes.string.isRequired,
}

export default Stars