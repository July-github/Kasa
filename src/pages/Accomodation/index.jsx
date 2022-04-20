import accomodations from '../../datas/logements.json'
import { useNavigate, useParams } from 'react-router-dom'
import TitreAccomodation from '../../components/TitreAccomodation/index'
import Carrousel from '../../components/Carrousel'
import { useState, useEffect } from 'react'
import DropDetail from '../../components/DropdownHome/index'
import styled from 'styled-components'

const DetailContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

function Accomodation(){
    const {id} = useParams() 
    const navigate = useNavigate()
    const [accomodation, setAccomodation] = useState({})
    let isId = false

    //The id doesn't exist
    useEffect(()=> {
        function getId(){
            accomodations.map((accomodation) => {
                if(accomodation.id === id){
                    return (isId = true)
                }
            })
        }
        getId();
        isId ? setAccomodation(accomodation) : navigate('/Error');

    }, [])

    return (
        <section>
            {
            accomodations
                .filter((accomodation) => accomodation.id === id)
                .map((accomodation) => 
                (<div key={accomodation.id} >
                    <Carrousel
                        pictures={accomodation.pictures}
                    />
                    <TitreAccomodation
                        title={accomodation.title}
                        location={accomodation.location}
                        host= {accomodation.host}
                        tags={accomodation.tags}
                    />
                    <DetailContainer>
                        <DropDetail key={accomodation.description}
                            description={accomodation.description}
                            detailType='description'
                        />
                        <DropDetail key={accomodation.equipments}
                            equipments={accomodation.equipments}
                            detailType='equipements'
                        />
                    </DetailContainer>
                </div>
                )
            )}
        </section>      
    )    
}

export default Accomodation