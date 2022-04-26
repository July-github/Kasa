import accomodations from '../../datas/accomodations.json'
import { useNavigate, useParams } from 'react-router-dom'
import TitleAccomodation from './TitleAccomodation/index'
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

const EquipUl = styled.ul`
    padding: 0;
    margin: 0;
`

const EquipLines = styled.li`
    list-style: none;
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
                        detailType='Description'
                    >{accomodation.description}</Dropdown>
                </DropWrap>
                <DropWrapper>
                    <Dropdown 
                        detailType='Equipements'
                        >
                            <EquipUl>
                                {accomodation.equipments.map((equipment) => <EquipLines key={equipment}>{equipment}</EquipLines>)}
                            </EquipUl>
                    </Dropdown>
                </DropWrapper>
            </DetailContainer>
        </section>      
    )    
}

export default Accomodation