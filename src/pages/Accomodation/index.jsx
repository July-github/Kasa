import accomodations from '../../datas/accomodations.json'
import { useNavigate, useParams } from 'react-router-dom'
import TitleAccomodation from './TitleAccomodation/index'
import Carrousel from '../../components/Carrousel'
import { useState, useEffect } from 'react'
import Dropdown from '../../components/Dropdown/index'
import "../Accomodation/index.css"

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
            <div className='detailContainer'>
                <div className='dropBox'>
                    <Dropdown 
                        detailType='Description'
                    >{accomodation.description}</Dropdown>
                </div>
                <div className='dropWrapper'>
                    <Dropdown 
                        detailType='Equipements'
                        >
                            <ul className='equipUl'>
                                {accomodation.equipments.map((equipment) => <li className='equipLines' key={equipment}>{equipment}</li>)}
                            </ul>
                    </Dropdown>
                </div>
            </div>
        </section>      
    )    
}

export default Accomodation