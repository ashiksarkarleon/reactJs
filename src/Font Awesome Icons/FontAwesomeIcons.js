import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import './FontAwesomeIcons.css'


const FontAwesomeIcons = () => {
    return(
        <>
            <FontAwesomeIcon icon={faCoffee} id="faCoffee"/>
            <FontAwesomeIcon icon={faFacebook}/>
            <FontAwesomeIcon icon={faTwitter}/>
            <FontAwesomeIcon icon={faInstagram}/>
            
        </>
    );
}

export default FontAwesomeIcons;