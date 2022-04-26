import {useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Colors from '../../utils/style/Colors'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import defaultPicture from '../../assets/DefaultPicture.png'

const CarrouselContainer = styled.div`
    display: flex;
    width: 100%;
    position: relative;
`

const CarrouselOnlyPicture = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    margin-bottom: 40px;
`

const CarrouselNoPictures = styled.img`
    height: 415px;
    border-radius: 25px;
    width: 100%;
    position: relative;
    z-index: 1;

    @media (max-width: 667px) { 
        height: 255px;
    } 
`

const CarrouselPictures = styled.img`
    height: 415px;
    border-radius: 25px;
    width: 100%;
    object-fit: cover;
    position: relative;
    z-index: 1;

    @media (max-width: 667px) { 
        height: 255px;
    } 
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

    @media (max-width: 667px) { 
        font-size: 40px;
        left: 5px;
        top: 100px;
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

    @media (max-width: 667px) { 
        font-size: 40px;
        right: 5px;
        top: 100px;
    } 
`

function Carrousel({pictures}){
    const [currentPicture, setCurrentPicture] = useState(0)
    const length = pictures.length

    const switchNextPicture = () => { setCurrentPicture(currentPicture  === length - 1 ? 0 : currentPicture + 1)}
    const switchPrevPicture = () => { setCurrentPicture(currentPicture  === 0 ? length - 1 : currentPicture - 1)}

    return (
        <CarrouselOnlyPicture>
            {length === 0 ? <CarrouselNoPictures src = {defaultPicture} alt='carrouselImage'></CarrouselNoPictures> :
            length === 1 ? 
            <CarrouselPictures src = {pictures[currentPicture]} alt='carrouselImage'></CarrouselPictures>
            :
            <CarrouselContainer>
                <CarrouselArrowLeft onClick={switchPrevPicture}><AiOutlineLeft /></CarrouselArrowLeft>
                <CarrouselPictures src = {pictures[currentPicture]} alt='carrouselImage'></CarrouselPictures>
                <CarrouselArrowRight onClick={switchNextPicture}><AiOutlineRight /></CarrouselArrowRight>
            </CarrouselContainer>
            }
        </CarrouselOnlyPicture>
    )
}

Carrousel.propTypes = {
    pictures : PropTypes.array.isRequired
}

export default Carrousel