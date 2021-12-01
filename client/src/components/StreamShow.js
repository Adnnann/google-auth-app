import { useEffect } from "react";
import { select } from '../services/apiServices' 
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedStream } from "../actions";
import { useSelector } from "react-redux";
import FlvJs from "flv.js";
import {ReactFlvPlayer} from 'react-flv-player'


const StreamShow = () =>{

    const stream = useSelector((state) => state.stream)
    const dispatch = useDispatch();
    const streamID = useParams();
    const id = streamID.id
    useEffect(()=>{
        if(id && id !==""){
            select('streams',id,data => {
                if(data) dispatch(selectedStream(data))
            })
        }   
    },[id])

return(
    <>
    <p style={{visibility:"hidden", height:"0", color:"red",paddingBottom:"0"}} id="error">There is an error with a server. Try again later</p>
    <div style={{width:"80%", height:"20%"}}>
    <ReactFlvPlayer
          url = {`http://localhost:8000/live/${streamID.id}.flv`}
          isMuted={true}
            handleError={(err) => {
        switch (err) {
            case 'NetworkError':
            document.getElementById("error").style.visibility ="visible"
            document.getElementById("error").style.height ="2%"
            console.log('network error');
            break;
            case 'MediaError':
            console.log('network error');
            break;
            default:
            document.getElementById("error").remove()
        }
        }}
        />
    </div>
    <h1 style={{marginTop:"0.2%", marginBottom:"0%"}}>{stream.title}</h1>
    <p style={{marginTop:"0.2%"}}>{stream.description}</p>
    </>
)
    
}

export default StreamShow;