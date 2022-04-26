import PropTypes from 'prop-types'
import styled from 'styled-components'
import Colors from '../../../utils/style/Colors'
import HostDefaultPicture from '../../../assets/HostDefault_Picture.jpg'
import Stars from '../../../components/Stars/index'


const TitleAccomodationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: top;

    @media (max-width: 667px) { 
        flex-direction: column;
    }
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

    @media (max-width: 667px) { 
        flex-direction: row-reverse;
        margin-top: 15px;
    }
`

const AccomodationTitle = styled.h1`
    color: ${Colors.primary};
    font-size: 36px;
    margin: 0;

    @media (max-width: 667px) { 
        font-size: 18px;
    }
`

const AccomodationLocation = styled.p`
    color: ${Colors.primary};
    font-size: 18px;

    @media (max-width: 667px) { 
        font-size: 14px;
    }
`

const AccomodationHote = styled.p`
    color: ${Colors.primary};
    font-size: 18px;
    text-align: right;
    margin-right: 15px;

    @media (max-width: 667px) { 
        font-size: 12px;
    }
`

const AccomodationHoteImage = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50px;
    text-align: right;

    @media (max-width: 667px) { 
        width: 32px;
        height: 32px;
    }
`

const TagsContainer = styled.div`
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
`

const TagsWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.primary};
    color: ${Colors.secondary};
    border-radius: 15px;
    padding: 10px 35px;
    width: auto;
    min-width: 115px;
    height: 20px;
    align-content: center;
    margin-right: 20px;
    margin-top:20px;
    font-size: 14px;

    @media (max-width: 667px) { 
        width: auto;
        min-width: 84px;
        height: 18px;
        margin-top: 10px;
        border-radius: 5px;
        padding: 5px 25px;
        font-size: 10px;
    }
`

const HoteWrap = styled.div`
    display: flex;
`

function TitleAccomodation({accomodation}){

    return (
        <TitleAccomodationContainer>
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
        </TitleAccomodationContainer>      
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