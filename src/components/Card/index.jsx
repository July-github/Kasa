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

function Card({title}){
    return(
            <CardTitle>
                {title}
            </CardTitle>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
}
  
Card.defaultProps = {
    title: '',
}

export default Card