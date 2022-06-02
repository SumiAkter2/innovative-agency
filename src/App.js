import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Home/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Home/Footer';
import LogIn from './Pages/Login/LogIn';
import SignIn from './Pages/Login/SignIn';
import RequireAuth from './Pages/Login/RequireAuth';
import Team from './Pages/Team/Team';
import Order from './Pages/DashBoard/Order';
import Dashboard from './Pages/DashBoard/Dashboard';


function App() {
  return (
    <div >
      <Navbar>

        <Routes >
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
          <Route path='/login' element={<LogIn></LogIn>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/signup' element={<SignIn />}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/team' element={<RequireAuth><Team></Team></RequireAuth>}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;
