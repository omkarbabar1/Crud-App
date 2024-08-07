import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Allusers from './components/AllUsrs';
import AddUsr from './components/AddUsr';

import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import EditUser from './components/EditUser';
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/all' element={<Allusers/>}/>
            <Route path='/add' element={<AddUsr/>}/>
            <Route path='/edit/:id' element={<EditUser/>}/>
            </Routes>  
    </BrowserRouter>
  );
}

export default App;
