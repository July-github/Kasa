import PropTypes from 'prop-types'
import styled from 'styled-components'
import Colors from '../../utils/style/Colors'
import HostDefaultPicture from '../../assets/HostDefault_Picture.jpg'

const TitreLogementContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LocationLogementContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
`

const HostLogementContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const LogementTitle = styled.h1`
    color: ${Colors.primary};
    font-size: 36px;
`

const LogementLocation = styled.p`
    color: ${Colors.primary};
    font-size: 18px;
`

const LogementHote = styled.p`
    color: ${Colors.primary};
    font-size: 18px;
    text-align: right;
`

const LogementHoteImage = styled.img`
    width: 64px;
    height: 64px;
    border-radius:50px;
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

function TitreLogement({title, location, host, tags, rating}){

    const ratingNumber = {rating}

    const stars = function rate(){
        if (ratingNumber > 0){
            return (
                <i class='fas fa-star'></i>
            )
        }else{
            return ('no')
        }
    }

    return (
        <TitreLogementContainer>
            <LocationLogementContainer>
                <LogementTitle>{title}</LogementTitle>
                <LogementLocation>{location}</LogementLocation>
                <TagsContainer>
                    {tags.map((tag) => (
                        <TagsWrap>{tag}</TagsWrap>
                    ))}
                </TagsContainer>

            </LocationLogementContainer>
            <HostLogementContainer>
                <LogementHote>{host.name}name</LogementHote>
                <LogementHoteImage>{host.picture}</LogementHoteImage>
                <div>{stars}</div>
            </HostLogementContainer>
        </TitreLogementContainer>      
    )    
}

TitreLogement.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
    }),
    tags: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.number.isRequired,
}

TitreLogement.defaultProps = {
    title: '',
    location: '',
    host: {
        name:'',
        picture: HostDefaultPicture,
    },
    tags: '',
    rating: '0',
}

export default TitreLogement