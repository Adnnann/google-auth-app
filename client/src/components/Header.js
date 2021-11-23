

import '../styles/header.css';
import { Router, Link, Route } from 'react-router';

const header = () =>{

    return(
        <div style={{height:"10%",display:"flex",width:"97%", marginBottom:"5%", borderBottomColor:"grey", borderBottomStyle:"groove", borderBottomWidth:"0.5px", marginLeft:"1.5%"}} >
        <p style={{float:"left", display:"inline-flex",marginLeft:"2%"}}>Streamer</p>
        <a href="#" style={{marginLeft:"58%", display:"flex", marginRigth:"1%"}}>All streams</a>
        <button style={{marginLeft:"1%", display:"flex",width:"15%", paddingLeft:"4%", paddingTop:"1%", backgroundColor:"red", 
        borderStyle:"groove", borderWidth:"0.5px", borderRadius:"2px"}}>Log in</button>
       
      </div>
    )
}

export default header;