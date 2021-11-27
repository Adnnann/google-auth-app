import { Message, Icon, Grid, Button } from 'semantic-ui-react'
import { React, useEffect, useState } from 'react';
import { list } from '../services/apiServices'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setStreams } from '../actions';

const StreamList = ({userID})=>{
const dispatch = useDispatch()
const storedStreams = useSelector((state) => state.streams.streams)

useEffect(()=>{
    list('streams', data => {
        dispatch(setStreams(data))
    })   
},[])

    return(
        <>
        <h1>Streams</h1> 
        
        {storedStreams.map((stream) => 
        <Message style={{marginBottom:"0%", paddingTop:"0%", paddingBottom:"0%",marginTop:"0"}} key={stream.id}>
    <Grid>
        <Grid.Column width={1}>
           <Link to={`/streams/${stream.id}`}> <Icon name="photo" size="big" /></Link>
        </Grid.Column>
        <Grid.Column width={6}>
            <div style={{display:"block"}} > 
            <Message.Header style={{marginBottom:"0",paddingBottom:"0",marginTop:"0%"}}>{stream.title}</Message.Header>
            <p style={{marginBottom:"0",paddingBottom:"0",marginTop:"0%"}}>{stream.description}</p>
            </div>
        </Grid.Column>
        <Grid.Column width={8}>
            <Button className="ui right floated button" color="red" style={{visibility: stream.id === userID  && userID !== "" ? "visible" : "hidden"}}>Delete</Button>
            <Button className="ui right floated button" color="blue" style={{visibility: stream.id === userID && userID !== "" ? "visible" : "hidden"}}>Edit</Button>
        </Grid.Column>
    </Grid>
    </Message> 
    )  
 }
 <Button primary className="ui right floated button" style={{visibility: userID !== "" ? "visible" : "hidden"}}><Link to="/streams/new" style={{color:"white", textDecoration:"none"}}>Create stream</Link></Button>

       
     </>
    )
}
export default StreamList;
