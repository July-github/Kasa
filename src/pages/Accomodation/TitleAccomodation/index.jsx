import PropTypes from 'prop-types'
import "../TitleAccomodation/index.css"
import HostDefaultPicture from '../../../assets/HostDefault_Picture.jpg'
import Stars from '../../../components/Stars/index'


function TitleAccomodation({accomodation}){

    return (
        <div className='titleAccomodationContainer'>
            <div className='locationAccomodationContainer'>
                <h1 className='accomodationTitle'>{accomodation.title}</h1>
                <p className='accomodationLocation'>{accomodation.location}</p>
                <div className='tagsContainer'>
                    {accomodation.tags.map((tag) => (
                        <div className='tagsWrap' key={tag}>{tag}</div>
                    ))}
                </div>
            </div>
            <div className='hhostAccomodationContainer'>
                <div className='hoteWrap'>
                    <p className='accomodationHote'>{accomodation.host.name}</p>
                    <img className='accomodationHoteImage' src={accomodation.host.picture || HostDefaultPicture} alt='Host'/>
                </div>
                <Stars 
                    rating={accomodation.rating}
                />
            </div>
        </div>      
    )    
}

TitleAccomodation.propTypes = {
    accomodation: PropTypes.shape({        
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        host: PropTypes.shape({
            name: PropTypes.string.isRequired,
            picture: PropTypes.string.isRequired
        }),
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired 
}

export default TitleAccomodation