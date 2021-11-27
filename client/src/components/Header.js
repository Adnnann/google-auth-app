import '../styles/header.css';
import { Link } from 'react-router-dom';
import {GoogleLogin } from 'react-google-login';


const Header = ({logIn, logOut, login, logout}) =>{

    return(

        <div>
        { login ?
        <GoogleLogin
        clientId={"477654461385-5hndheblo0s294djmmhf3kgqa8m9asls.apps.googleusercontent.com"}
        buttonText="Log In"
        onSuccess={logIn}
        onFailure={logIn}
        cookiePolicy={'single_host_origin'}
        render={renderProps=>(
            <button className="ui google plus right floated button" onClick={renderProps.onClick}><i aria-hidden="true" className="google plus icon"></i>Sign In</button>
        )}
        //isSignedIn={true}
        /> : null
        }
        { logout ?
            <button className="ui google plus right floated button" onClick={logOut}><i aria-hidden="true" className="google plus icon"></i> Logout</button>
        : null}
           <button className="ui left floated button" style={{backgroundColor:"white"}}>Streamer</button>
            <button className="ui right floated button" style={{backgroundColor:"white"}}><Link  to='/' style={{color:"grey", textDecoration:"none"}}>All streams</Link></button>
            
        </div>   
    )
}

export default Header;