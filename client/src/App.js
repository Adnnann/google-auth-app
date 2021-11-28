import { Grid } from 'semantic-ui-react';
import Header from './components/Header'
import {BrowserRouter as Router} from 'react-router-dom'
import MainRouter from './MainRouter';
import 'semantic-ui-css/semantic.min.css'
import {useState, useEffect } from 'react'
import { gapi } from 'gapi-script';
function App() {

const [login, setLogin] = useState(true)
const [logout, setLogout] = useState(false)
const [userID, setUserID] = useState("")

const logIn = (res) => {
    if(res){
      console.log(res.profileObj.googleId)
      setUserID(res.profileObj.googleId)
      setLogin(false)
      setLogout(true)
    }else{
        return;
    }
  
}  

const logOut = () => {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(auth2.disconnect())
  setLogin(true)
  setLogout(false)
  setUserID("")
}

return (
<Grid verticalAlign="middle" columns={1} centered>
    <Grid.Column width={14}>

  <Router>
  <Grid.Row style={{marginBottom:"7%"}}>
    <Header logIn={logIn} logOut={logOut} login={login} logout={logout} />
  </Grid.Row>
<hr />
  <Grid.Row>
    <MainRouter userID={userID} />
  </Grid.Row>
  </Router>
</Grid.Column>

</Grid>
  )
}

export default App;
