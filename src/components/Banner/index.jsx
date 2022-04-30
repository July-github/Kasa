import PropTypes from 'prop-types'
import "../Banner/index.css"

function Banner({headText, headImage, headImageAlt}){

    return (
        <div className='headWrap'>
            <div className='headImageWrap'>
                <div className='headOpacity'></div>
                <img className='headImage' src={headImage} alt={headImageAlt} />
            </div>
            <h1 className='headImageText'>{headText}</h1>
        </div>
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