import "../Error404/index.css"
import {Link} from 'react-router-dom'

function Error() {
    return (
        <section className="errorContainer">
            <div className="errorWarning">
                <span className="errorSpan">
                    404
                </span>
                <p className="textError">
                    Oups! La page que vous demandez n'existe pas.
                </p>
            </div>
            <div className="errorLinkHome">
                <Link className="errorStyledLink" to='/'>
                    Retourner sur la page d'accueil
                </Link>
            </div>
        </section>
    );
  }
  
  export default Error;