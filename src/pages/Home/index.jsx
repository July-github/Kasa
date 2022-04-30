import Card from '../../components/Card/index'
import "../Home/index.css"
import accomodations from '../../datas/accomodations.json'
import Banner from '../../components/Banner/index'
import {Link} from 'react-router-dom'
import HomeBack from '../../assets/Home_background.jpg'


function Home() {

  return (
      <section>
          <Banner 
              headText = 'Chez vous, partout et ailleurs'
              headImage = {HomeBack}
              headImageAlt = 'Mountains Image'
          />
          <section className='cardContainer'>
              <div className='cardWrapper'>
                  {accomodations.map((accomodation) => (
                      <Link className='stylLink' key = {accomodation.id} to={`/accomodation/${accomodation.id}`}>
                      <div className='cardDiv'>
                          <Card 
                              title = {accomodation.title}
                              cover = {accomodation.cover}
                          />
                      </div>
                      </Link>
                  ))}
              </div>
          </section>
      </section>
  );
}
  
export default Home;