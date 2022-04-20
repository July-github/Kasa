import accomodations from '../../datas/logements.json'
import { useNavigate, useParams } from 'react-router-dom'
import TitreAccomodation from '../../components/TitreAccomodation/index'
import Carrousel from '../../components/Carrousel'
import { useState, useEffect } from 'react'
import Dropdown from '../../components/Dropdown/index'
import styled from 'styled-components'

const DetailContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const DropWrap = styled.div`
    width: 45%;
`

const DropWrapper = styled.div`
    width: 45%;
`

function Accomodation(){
    const {id} = useParams() 
    const navigate = useNavigate()
    const [accomodation, setAccomodation] = useState()
    // let isId = false

    //The id doesn't exist
    // useEffect(()=> {
    //     function getId(){
    //         accomodations.forEach((accomodation) => {
    //             if(accomodation.id === id){
    //                  isId = true
    //             }
    //         })
    //     }
    //     getId();
    //     isId ? setAccomodation(accomodation) : navigate('/Error');

    // }, [])

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
            <TitreAccomodation
                accomodation={accomodation}
            />
            <DetailContainer>
                <DropWrap>
                    <Dropdown 
                        key={accomodation.description}
                        description={accomodation.description}
                        detailType='Description'
                        detail='string'
                    />
                </DropWrap>
                <DropWrapper>
                    <Dropdown 
                        key={accomodation.equipments}
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