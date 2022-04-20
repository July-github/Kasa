import Card from '../../components/Card/index'
import styled from 'styled-components'
import accomodations from '../../datas/logements.json'
import HomeBack from '../../assets/Home_background.jpg'
import Colors from '../../utils/style/Colors'
import {Link} from 'react-router-dom'

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
  margin: 20px 20px;
  border-radius: 10px;
  position: relative;
  background: rgb(108,34,36);
  background: linear-gradient(0deg, rgba(108,34,36,0.7497592787114846) 0%, rgba(255,94,101,1) 100%);
  &:hover{
    cursor: pointer;
  }
`

const HeadWrap = styled.div`
  width: 100%;
  height: 223px;
  margin-bottom: 40px;
  position: relative;
`

const HeadImageWrap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  position: absolute;
`

const HeadImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  position: absolute;
  z-index:1;
  object-fit:cover;
`

const HeadImageText = styled.h1`
  display: flex;
  color: ${Colors.secondary};
  font-size: 48px;
  align-items: center;
  justify-content: center;
  margin: 0;
  position: absolute;
  z-index:2;
  width: 100%;
  height: 100%;
`

function Home() {

  return (
    <section>
      <HeadWrap>
        <HeadImageWrap>
          <HeadImage src={HomeBack} alt="Coast Image" />
        </HeadImageWrap>
        <HeadImageText>Chez vous, partout et ailleurs</HeadImageText>
      </HeadWrap>
      <CardContainer>
        <CardWrapper>
          {accomodations.map((accomodation) => (
            <Link key = {accomodation.id} to={`/accomodation/${accomodation.id}`}>
            <CardDiv>
              <Card 
                title = {accomodation.title}
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