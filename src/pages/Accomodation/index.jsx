import accomodations from '../../datas/accomodations.json'
import { useNavigate, useParams } from 'react-router-dom'
import TitleAccomodation from '../../components/TitleAccomodation/index'
import Carrousel from '../../components/Carrousel'
import { useState, useEffect } from 'react'
import Dropdown from '../../components/Dropdown/index'
import styled from 'styled-components'

const DetailContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 667px) { 
        flex-direction: column;
    } 
`

const DropWrap = styled.div`
    width: 45%;

    @media (max-width: 667px) { 
        width: 100%;
    } 
`

const DropWrapper = styled.div`
    width: 45%;

    @media (max-width: 667px) { 
        width: 100%;
    } 
`

function Accomodation(){
    const {id} = useParams() 
    const navigate = useNavigate()
    const [accomodation, setAccomodation] = useState()

    useEffect(()=> {
        const currentAccomodation = accomodations.find((accomodation) => accomodation.id === id)

        if(!currentAccomodation){
            navigate('/Error')
        }
        setAccomodation(currentAccomodation)
    }, [id, navigate])

    if(!accomodation){
        return null
    }

    return (
        <section>
            <Carrousel
                pictures={accomodation.pictures}
            />
            <TitleAccomodation
                accomodation={accomodation}
            />
            <DetailContainer>
                <DropWrap>
                    <Dropdown 
                        description={accomodation.description}
                        detailType='Description'
                        detail='string'
                    />
                </DropWrap>
                <DropWrapper>
                    <Dropdown 
                        equipments={accomodation.equipments}
                        detailType='Equipements'
                        detail='list'
                    />
                </DropWrapper>
            </DetailContainer>
        </section>      
    )    
}

export default Accomodation