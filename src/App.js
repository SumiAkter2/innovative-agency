import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Home/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div >
      <Navbar>

        <Routes >
          <Route path='/home' element={<Home></Home>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
