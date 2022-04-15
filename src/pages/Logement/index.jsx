import Logements from '../../datas/logements.json'
import { useParams } from 'react-router-dom'
import TitreLogement from '../../components/TitreLogement/index'
import Carrousel from '../../components/Carrousel'

function Logement(){
    const {id} = useParams()

    return (
        <section>
            {Logements
                .filter((Logement) => Logement.id === id)
                .map((Logement) => 
                <div>
                    <Carrousel/>
                    <TitreLogement
                        key={`{Logement.id}`}
                        title={Logement.title}
                        location={Logement.location}
                        host= {Logement.host.name}
                        tags={Logement.tags}
                    />
                </div>
                )
            }
        </section>      
    )    
}

export default Logement