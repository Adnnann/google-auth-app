
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import StreamCreate from './components/StreamCreate';
import StreamDelete from './components/StreamDelete';
import StreamList from './components/StreamList';
import StreamEdit from './components/StreamEdit';
import { Container } from 'semantic-ui-react';


function App() {
  return (

<div style={{position:"fixed", height:"100%", bottom:"0", top:"0",width:"100%",marginLeft:"2%"}}>

  <Router>

  <div style={{height:"10%",display:"flex",width:"97%", marginBottom:"5%", borderBottomColor:"grey", borderBottomStyle:"groove", 
  borderBottomWidth:"0.5px"}} >
        <p style={{float:"left", display:"inline-flex",marginLeft:"2%",paddingTop:"1%"}}>Streamer</p>
        <Link to='/' style={{marginLeft:"58%", display:"flex", marginRigth:"1%",paddingTop:"1%",color:"grey"}}>All streams</Link>
        <button style={{marginLeft:"1%", display:"flex",width:"15%", paddingLeft:"4%", paddingTop:"1%", backgroundColor:"red", 
        borderStyle:"groove", borderWidth:"0.5px", borderRadius:"2px"}}>Log in</button>
  </div>
    <div><Link to='/edit'>Edit</Link></div>
    <div><Link to="/delete">Delete</Link></div>
    <div><Link to="/create">Create</Link></div>
    
    <Routes>
      <Route path="/" element={<StreamList/>}>Home</Route>
      <Route path="/create" element={<StreamCreate />}>Create</Route>
      <Route path="/edit" element={<StreamEdit />}>Edit</Route>
      <Route path="/delete" element={<StreamDelete />}>Delete</Route>
    </Routes>

  </Router>
  <Footer />

  </div>
  )
}

export default App;
