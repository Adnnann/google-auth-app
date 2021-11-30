import '../styles/header.css';
import { Link } from 'react-router-dom';
import {GoogleLogin } from 'react-google-login';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStreams } from '../actions';
import { list } from '../services/apiServices';



const Header = ({logIn, logOut, login, logout}) =>{
    const [streamsArr, setStreamsArr] = useState([])
    const storedStreams = useSelector((state) => state.streams.streams)
    const dispatch = useDispatch()

    useEffect(()=>{
        list('streams', data => {
            setStreamsArr(data)
            dispatch(setStreams(data))
        })   
    },[])
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
            <Link to="/">  <button className="ui google plus right floated button" 
            onClick={renderProps.onClick} disabled={!streamsArr || !storedStreams ? true : false}><i aria-hidden="true" className="google plus icon" ></i>Sign In</button></Link>
        )}
        /> : null
        }
        { logout ?
            <Link to="/">  <button className="ui google plus right floated button" onClick={logOut}>
            <i aria-hidden="true" className="google plus icon"></i> Logout</button></Link>
        : null}
           <button className="ui left floated button" style={{backgroundColor:"white"}}>Streamer</button>
            <button className="ui right floated button" style={{backgroundColor:"white"}}><Link  to='/' style={{color:"grey", textDecoration:"none"}}>All streams</Link></button>
            
        </div>  
    )
}

export default Header;