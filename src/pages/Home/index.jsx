import Card from '../../components/Card/index'
import styled from 'styled-components'
import accomodations from '../../datas/logements.json'
import Banner from '../../components/Banner/index'
import Colors from '../../utils/style/Colors'
import {Link} from 'react-router-dom'
import HomeBack from '../../assets/Home_background.jpg'


const CardContainer = styled.section`
  background-color: #F7F7F7;
  border-radius: 25px;
  width: 100%;
  margin: auto;
`

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;
`

const CardDiv = styled.div`
  height: 340px;
  width: 340px;
  margin: 20px 15px;
  border-radius: 10px;
  position: relative;
  background-color: rgb(108,34,36);
  background: linear-gradient(0deg, rgba(108,34,36,0.75) 0%, rgba(255,94,101,1) 100%);
  &:hover{
    cursor: pointer;
  }
`

function Home() {

  return (
    <section>
      <Banner 
        headText = 'Chez vous, partout et ailleurs'
        headImage = {HomeBack}
        headImageAlt = 'Mountains Image'
      />
      <CardContainer>
        <CardWrapper>
          {accomodations.map((accomodation) => (
            <Link key = {accomodation.id} to={`/accomodation/${accomodation.id}`}>
            <CardDiv>
              <Card 
                title = {accomodation.title}
                cover = {accomodation.cover}
              />
            </CardDiv>
            </Link>
          ))}
        </CardWrapper>
      </CardContainer>
    </section>
  );
}
  
export default Home;