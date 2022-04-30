import "../About/index.css"
import AboutBack from '../../assets/About_background.jpg'
import Dropdown from '../../components/Dropdown/index'
import Banner from '../../components/Banner/index'

function About() {

    return (
        <section>
            <Banner 
                headText = ''
                headImage = {AboutBack}
                headImageAlt = 'Coast Image'
              />
            <div className="dropDetailWrap">
                <Dropdown
                    key='Fiablité'
                    detailType='Fiabilité'
                >Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                </Dropdown>
                <Dropdown
                    key='Respect'
                    detailType='Respect'
                >La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </Dropdown>
                <Dropdown
                    key='Service'
                    detailType='Service'
                >Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                </Dropdown>
                <Dropdown
                    key='Responsabilité'
                    detailType='Responsabilité'
                >La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </Dropdown>
            </div>
        </section>
    );
  }
  
  export default About;