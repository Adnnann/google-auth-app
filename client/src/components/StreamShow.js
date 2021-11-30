import { useEffect } from "react";
import { select } from '../services/apiServices' 
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedStream } from "../actions";
import { useSelector } from "react-redux";
import FlvJs from "flv.js";


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
        streamDisplay()
    },[id])

    console.log("stream id", stream.id)
    const streamDisplay = () => {
        if(FlvJs.isSupported()){
        const stream = document.getElementById("stream")
        const flvPlayer = FlvJs.createPlayer({
            type:'flv',
            url:`http://localhost:8000/live/${stream.id}.flv`
        });
        if(!flvPlayer){
            return
        }else{
            flvPlayer.attachMediaElement(stream);
        flvPlayer.load();
        flvPlayer.play()
        }
        
    }
}
 
   
return(
    <>
    <video width="80%" height="20%" controls id="stream" style={{margin:"auto"}}>
        Your browser does not support the video tag.
    </video>

    <h1 style={{marginTop:"0.2%", marginBottom:"0%"}}>{stream.title}</h1>
    <p style={{marginTop:"0.2%"}}>{stream.description}</p>
    </>
)
    
}

export default StreamShow;