import PropTypes from 'prop-types'
import "../Stars/index.css"
import { IoStarSharp } from 'react-icons/io5'

function Stars({rating}){
    const ratingNumber = Number(rating)
    const range = [1, 2, 3, 4, 5]
 
    return (
        <div>
            {range.map((rank) => (
                rank<=ratingNumber ? <i className='starsColor' key={rank}><IoStarSharp /></i> 
                : <i className='star' key={rank}><IoStarSharp /></i>
            ))}
        </div>
    )
}

Stars.propTypes = {
    rating: PropTypes.string,
}

Stars.defaultProps = {
    rating: '0'
}

export default Stars