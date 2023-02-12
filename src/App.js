
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Content from './Components/Content';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Create_new from './Components/Create_new';
function App() {
  return (<>
  {/* <Navbar/>
  <Content/> */}
  
  {/* <Create_new/> */}
  <Router>
    <Routes>
      <Route exact path='/' element={<Content/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/signup' element={<Create_new/>}></Route>
    </Routes>
  </Router>
  </>);
}

export default App;
