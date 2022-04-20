import PropTypes from 'prop-types'
import styled from 'styled-components'
import Colors from '../../utils/style/Colors'
import HostDefaultPicture from '../../assets/HostDefault_Picture.jpg'
import Stars from '../Stars/index'


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
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
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
const HoteWrap = styled.div`
    display: flex;
`

function TitreAccomodation({accomodation}){

    return (
        <TitreAccomodationContainer>
            <LocationAccomodationContainer>
                <AccomodationTitle>{accomodation.title}</AccomodationTitle>
                <AccomodationLocation>{accomodation.location}</AccomodationLocation>
                <TagsContainer>
                    {accomodation.tags.map((tag) => (
                        <TagsWrap key={tag}>{tag}</TagsWrap>
                    ))}
                </TagsContainer>

            </LocationAccomodationContainer>
            <HostAccomodationContainer>
                <HoteWrap>
                    <AccomodationHote>{accomodation.host.name}</AccomodationHote>
                    <AccomodationHoteImage src={accomodation.host.picture || HostDefaultPicture} alt='Host'></AccomodationHoteImage>
                </HoteWrap>

                <Stars 
                    rating={accomodation.rating}
                />
            </HostAccomodationContainer>
        </TitreAccomodationContainer>      
    )    
}


TitreAccomodation.propTypes = {
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


export default TitreAccomodation