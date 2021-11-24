import '../styles/header.css';
import { Link } from 'react-router-dom';
import { Container, Button, Icon } from 'semantic-ui-react'


const Header = () =>{

    return(
        <div>
           <button className="ui left floated button" style={{backgroundColor:"white"}}>Streamer</button>
            <button className="ui google plus right floated button"><i aria-hidden="true" class="google plus icon"></i> Sign In</button>
            <button className="ui right floated button" style={{backgroundColor:"white"}}><Link  to='/' style={{color:"grey", textDecoration:"none"}}>All streams</Link></button>
            
        </div>   
    )
}

export default Header;