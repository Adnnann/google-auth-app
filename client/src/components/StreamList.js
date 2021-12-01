import { Message, Icon, Grid, Button } from 'semantic-ui-react'
import { React, useEffect, useState } from 'react';
import { list } from '../services/apiServices'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setStreams, selectedStream } from '../actions';
import StreamDelete from './StreamDelete';
import '../styles/modal.css'
import { useNavigate } from 'react-router';

const StreamList = ({userID})=>{
const dispatch = useDispatch()
const [streamsArr, setStreamsArr] = useState([])
const storedStreams = useSelector((state) => state.streams.streams)
const navigate = useNavigate()
useEffect(()=>{
    list('streams', data => {
        setStreamsArr(data)
        dispatch(setStreams(data))
        
    })  
    dispatch(selectedStream(null)) 
},[])

    return(
        <>

        <h1>Streams</h1> 

        {streamsArr.length === 0 ? <p>No streams available. Please log in if you wish to create streams</p> 
        :!streamsArr || !storedStreams ? <p>We have some technical issues. Please try again later!</p> 
        :storedStreams.map((stream) => 
        <Message style={{marginBottom:"0%", paddingTop:"0%", paddingBottom:"0%",marginTop:"0"}} key={stream.id}>
    <Grid>
        <Grid.Column width={1}>
           <Link to={`/streams/${stream.id}`}> <Icon name="photo" size="big" /></Link>
        </Grid.Column>
       <StreamDelete />
        <Grid.Column width={8}>
            <div style={{display:"block"}} > 
            <Message.Header style={{marginBottom:"0",paddingBottom:"0",marginTop:"0%"}}>{stream.title}</Message.Header>
            <p style={{marginBottom:"0",paddingBottom:"0",marginTop:"0%"}}>{stream.description}</p>
            </div>
        </Grid.Column>
        <Grid.Column width={6}>
        <Link to={`/streams/delete/${stream.id}`}><Button className="ui right floated button" color="red" style={{visibility: stream.userID === userID  && userID !== "" ? "visible" : "hidden"}} onClick={() => {document.getElementById('modal-root').style.visibility = "visible"}}>Delete</Button></Link>
        <Button onClick={()=>navigate(`/streams/edit/${stream.id}`)} className="ui right floated button" color="blue" style={{visibility: stream.userID === userID && userID !== "" ? "visible" : "hidden"}}>Edit</Button>
        </Grid.Column>
    </Grid>
    </Message> 
    )  
 }
 <Button primary className="ui right floated button" style={{visibility: userID !== "" ? "visible" : "hidden", color:"white", textDecoration:"none"}} 
 disabled={!streamsArr || !storedStreams ? true : false} onClick={()=>navigate("/streams/new")}>Create stream</Button>

       
     </>
    )
}
export default StreamList;
