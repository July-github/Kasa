import Card from '../../components/Card/index'
import styled from 'styled-components'
import Logements from '../../datas/logements.json'
import HomeBack from '../../assets/Home_background.jpg'
import Colors from '../../utils/style/Colors'


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
`

const HeadImageTextWrap = styled.div`
  postion: absolute;
  z-index:2;
  bottom: 50px;
  height: 100%;
`

const HeadImageText = styled.h1`
  color: ${Colors.secondary};
  font-size: 48px;
  text-align: center;
  margin: 0;
`

function Home({title}) {
    return (
      <section>
        <HeadWrap>
          <HeadImageWrap>
            <HeadImage src={HomeBack}/>
          </HeadImageWrap>
          <HeadImageTextWrap>
            <HeadImageText>Chez vous, partout et ailleurs</HeadImageText>
          </HeadImageTextWrap>
        </HeadWrap>
        <CardContainer>
          <CardWrapper>
            {Logements.map((Logement, id) => (
              <CardDiv>
                <Card
                  key = {id}
                  title = {Logement.title}
                />
              </CardDiv>
            ))}
          </CardWrapper>
        </CardContainer>

      </section>
    );
  }
  
  export default Home;
