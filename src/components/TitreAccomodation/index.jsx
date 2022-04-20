import PropTypes from 'prop-types'
import styled from 'styled-components'
import Colors from '../../utils/style/Colors'
import HostDefaultPicture from '../../assets/HostDefault_Picture.jpg'
import Stars from '../Stars/index'
import accomodations from '../../datas/logements.json'
import { useParams } from 'react-router-dom'


const TitreAccomodationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: top;
`

const LocationAccomodationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: top;
    width: 70%;
`

const HostAccomodationContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const AccomodationTitle = styled.h1`
    color: ${Colors.primary};
    font-size: 36px;
    margin: 0;
`

const AccomodationLocation = styled.p`
    color: ${Colors.primary};
    font-size: 18px;
`

const AccomodationHote = styled.p`
    color: ${Colors.primary};
    font-size: 18px;
    text-align: right;
    margin-right: 15px;
`

const AccomodationHoteImage = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50px;
    text-align: right;
`

const TagsContainer = styled.div`
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
`

const TagsWrap = styled.div`
    background-color: ${Colors.primary};
    color: ${Colors.secondary};
    border-radius: 15px;
    padding: 10px 35px;
    width: auto;
    min-width: 115px;
    height: 20px;
    text-align: center;
    align-content: center;
    margin-right: 20px;
    margin-top:20px;
`

function TitreAccomodation({title, location, host, tags}){

    return (
        <TitreAccomodationContainer>
            <LocationAccomodationContainer>
                <AccomodationTitle>{title}</AccomodationTitle>
                <AccomodationLocation>{location}</AccomodationLocation>
                <TagsContainer>
                    {tags.map((tag) => (
                        <TagsWrap key={tag}>{tag}</TagsWrap>
                    ))}
                </TagsContainer>

            </LocationAccomodationContainer>
            <HostAccomodationContainer>
                <AccomodationHote>{host.name}</AccomodationHote>
                <AccomodationHoteImage src={host.picture} alt='Host'></AccomodationHoteImage>
            </HostAccomodationContainer>
        </TitreAccomodationContainer>      
    )    
}

//<Stars key={accomodation.id} rating={accomodation.rating}/>

TitreAccomodation.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
    }),
    tags: PropTypes.arrayOf(PropTypes.string),
}

TitreAccomodation.defaultProps = {
    title: '',
    location: '',
    host: {
        name:'',
        picture: HostDefaultPicture,
    },
    tags: '',
}

export default TitreAccomodation