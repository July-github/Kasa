import {useState} from 'react'
import PropTypes from 'prop-types'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import defaultPicture from '../../assets/DefaultPicture.png'
import "../Carrousel/index.css"

function Carrousel({pictures}){
    const [currentPicture, setCurrentPicture] = useState(0)
    const length = pictures.length

    const switchNextPicture = () => { setCurrentPicture(currentPicture  === length - 1 ? 0 : currentPicture + 1)}
    const switchPrevPicture = () => { setCurrentPicture(currentPicture  === 0 ? length - 1 : currentPicture - 1)}

    return (
        <div className='carrouselOnlyPicture'>
            {length === 0 ? <img className='carrouselNoPictures' src = {defaultPicture} alt='carrouselImage' /> :
            length === 1 ? 
            <img className='carrouselPictures' src = {pictures[currentPicture]} alt='carrouselImage'/>
            :
            <div className='carrouselContainer'>
                <i className='carrouselArrowLeft' onClick={switchPrevPicture}><AiOutlineLeft /></i>
                <img className='carrouselPictures' src = {pictures[currentPicture]} alt='carrouselImage'/>
                <i className='carrouselArrowRight' onClick={switchNextPicture}><AiOutlineRight /></i>
            </div>
            }
        </div>
    )
}

Carrousel.propTypes = {
    pictures : PropTypes.array.isRequired
}

export default Carrousel