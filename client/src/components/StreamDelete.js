import { useEffect } from "react"
import { createPortal } from "react-dom"
import { Button, Modal } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import { remove } from "../services/apiServices"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { setStreams } from "../actions"



const StreamDelete = () => {

const params = useParams()  
const storedStreams = useSelector((state) => state.streams.streams)
const dispatch = useDispatch()

const deleteStream = () => {
  remove('streams', params.id, data =>{
    //dispatch(setStreams(data))
    console.log(data.filter(id => id !== params.id))
    document.getElementById('modal-root').style.visibility = "hidden"
    window.history.back()
  })
}


return createPortal(

<div className="modal">
<div style={{display:"block", position:"fixed", marginTop:"-15%", color:"red"}}><h1>Sure you want to delete?</h1></div>
<Link to="/"><Button style={{display:"flex"}} onClick={() => {document.getElementById('modal-root').style.visibility = "hidden"}}>Cancel</Button></Link>
<Button style={{display:"flex"}} onClick={deleteStream}>Proceed</Button>
  </div>, 
document.getElementById('modal-root')
  )


}
export default StreamDelete;