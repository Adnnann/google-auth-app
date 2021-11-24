import StreamList from './components/StreamList'
import StreamShow from './components/StreamShow';
import StreamEdit from './components/StreamEdit';
import StreamDelete from './components/StreamDelete';
import { Routes, Route } from 'react-router-dom';
import StreamCreate from './components/StreamCreate';
const MainRouter = () => {
 
    return(
        <Routes>
            <Route path="/" element={<StreamList/>}>Home</Route>
            <Route path="/create" element={<StreamCreate />}>Create</Route>
            <Route path="/edit" element={<StreamEdit />}>Edit</Route>
            <Route path="/delete" element={<StreamDelete />}>Delete</Route>
        </Routes>

    )
   
}

export default MainRouter;