import PropTypes from 'prop-types'
import "../Card/index.css"

function Card({title, cover}){
    return(
        <div className='cardWrap'>
            <div className='cardOpacity'></div>
            {cover? <img className='cardCover' src={cover} alt='cover'/>
            : null
            }
            <h2 className='cardTitle'>
                {title}
            </h2>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
}

export default Card