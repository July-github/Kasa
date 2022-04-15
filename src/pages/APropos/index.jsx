import styled from 'styled-components'
import AProposBack from '../../assets/APropos_background.jpg'

const HeadImageAPropos = styled.img`
width: 100%;
height: 223px;
margin-bottom: 40px;
border-radius: 25px;
`

function APropos() {
    return (
      <section>
          <HeadImageAPropos src={AProposBack} alt="Mountains Image" />
          APropos
      </section>
    );
  }
  
  export default APropos;