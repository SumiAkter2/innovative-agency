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
import Dashboard from './Pages/DashBoard/Dashboard';
import Order from './Pages/DashBoard/Order';
import MakeAdmin from './Pages/DashBoard/MakeAdmin';
import Review from './Pages/DashBoard/Review';
import AddProducts from './Pages/DashBoard/AddProducts';
import Details from './Pages/Home/Details';
import NotFound from './Pages/Home/NotFound';
import AddOrder from './Pages/DashBoard/AddOrder';
// import Profile from './Pages/DashBoard/Profile';
import MyProfile from './MyProfile';
import { useState } from 'react';
import Spinner from './Pages/Home/Spinner';
// import ServiceList from './Pages/DashBoard/ServiceList';



function App() {
  const [loading] = useState(false);
  if (loading) {
    return <Spinner></Spinner>
  }
  return (
    <div >
      <Navbar>

        <Routes >
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
          <Route path='login' element={<LogIn></LogIn>}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='services/:servicesId' element={<Details />}></Route>
          <Route path='dashboard' element={<Dashboard />}>
            <Route index element={<Order></Order>}
            ></Route>
            <Route path='review' element={<Review></Review>}
            ></Route>
            {/* <Route path='profile' element={<Profile />}
            ></Route> */}
            <Route path='admin' element={<MakeAdmin></MakeAdmin>}
            ></Route>
            <Route path='service' element={<AddProducts />}
            ></Route>
            <Route path='profile' element={<MyProfile />}
            ></Route>
          </Route>
          <Route path='addOrder' element={<AddOrder />}></Route>
          <Route path='signup' element={<SignIn />}></Route>
          <Route path='contact' element={<Contact></Contact>}></Route>
          <Route path='team' element={<RequireAuth><Team></Team></RequireAuth>}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;
