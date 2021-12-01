import { createPortal } from "react-dom"
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import { list, remove } from "../services/apiServices"
import { useNavigate, useParams } from "react-router"
import { useDispatch } from "react-redux"
import { setStreams } from "../actions"


const StreamDelete = () => {

const params = useParams()  
const dispatch = useDispatch()
const navigate = useNavigate()
const deleteStream = () => {
  remove('streams', params.id, data =>{ 
  })
  list('streams',data=>{
    dispatch(setStreams(data))
  })
  document.getElementById('modal-root').style.visibility = "hidden"
  navigate('/')
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