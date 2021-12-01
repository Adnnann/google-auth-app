import StreamList from './components/StreamList'
import StreamShow from './components/StreamShow';
import StreamEdit from './components/StreamEdit';
import StreamDelete from './components/StreamDelete';
import StreamCreate from './components/StreamCreate';
import { Routes, Route } from 'react-router-dom';

const MainRouter = ({userID}) => {
 
    return(

        <Routes>
            <Route path="/" element={<StreamList userID={userID}/>}>Home</Route>
            <Route path="/streams/new" element={<StreamCreate userID={userID}/>}>Create</Route>
            <Route path="/streams/edit/:id" element={<StreamEdit userID={userID} />}>Edit</Route>
            <Route path="/streams/delete/:id" element={<StreamDelete />}></Route>
            <Route path="/streams/:id" element={<StreamShow />}>Display stream</Route>
        </Routes>
  

    )
   
}

export default MainRouter;