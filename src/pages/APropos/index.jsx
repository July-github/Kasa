import styled from 'styled-components'
import AProposBack from '../../assets/APropos_background.jpg'
import DropAPropos from '../../components/DropAPropos/index'

const HeadImageAPropos = styled.img`
width: 100%;
height: 223px;
margin-bottom: 40px;
border-radius: 25px;
`
const DropDetailWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

function APropos() {
    return (
      <section>
          <HeadImageAPropos src={AProposBack} alt="Mountains Image" />
          <DropDetailWrap>
            <DropAPropos
              key='Fiablité'
              detailTitle='Fiabilité'
              detailType='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
            />
            <DropAPropos
              key='Respect'
              detailTitle='Respect'
              detailType='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
            />
            <DropAPropos
              key='Service'
              detailTitle='Service'
              detailType="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            />
            <DropAPropos
              key='Responsabilité'
              detailTitle='Responsabilité'
              detailType="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            />
          </DropDetailWrap>
      </section>
    );
  }
  
  export default APropos;