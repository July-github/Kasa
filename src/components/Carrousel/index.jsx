import {useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Colors from '../../utils/style/Colors'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const CarrouselContainer = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    margin-bottom: 40px;
`

const CarrouselPictures = styled.img`
    height: 415px;
    border-radius: 25px;
    width: 100%;
    object-fit: cover;
    position: relative;
    z-index: 1;
`
const CarrouselArrowLeft = styled.i`
    color: ${Colors.secondary};
    font-size: 120px;
    position: absolute;
    z-index: 2;
    left: 20px;
    top: 145px;
    &:hover{
        cursor: pointer;
    }
`

const CarrouselArrowRight = styled.i`
    color: ${Colors.secondary};
    font-size: 120px;
    position: absolute;
    z-index: 2;
    right: 20px;
    top: 145px;
    &:hover{
        cursor: pointer;
    }
`


function Carrousel({pictures}){
    const [currentPicture, setCurrentPicture] = useState(0)
    const length = pictures.length

    const switchNextPicture = () => { setCurrentPicture(currentPicture  === length - 1 ? 0 : currentPicture + 1)}
    const switchPrevtPicture = () => { setCurrentPicture(currentPicture  === 0 ? length - 1 : currentPicture - 1)}

    try{
    return (
        <CarrouselContainer>
            <CarrouselArrowLeft onClick={switchPrevtPicture}><AiOutlineLeft /></CarrouselArrowLeft>
            <CarrouselPictures src = {pictures[currentPicture]} alt='accomodation'></CarrouselPictures>
            <CarrouselArrowRight onClick={switchNextPicture}><AiOutlineRight /></CarrouselArrowRight>
        </CarrouselContainer>
    )}catch{return 'Pas de photo disponible'}
}

Carrousel.propTypes = {
    pictures : PropTypes.array.isRequired
}

Carrousel.defaultProps = {
    pictures : ''
}

export default Carrousel