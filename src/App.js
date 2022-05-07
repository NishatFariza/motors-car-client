
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './pages/Auth/LogIn/LogIn';
import SignUp from './pages/Auth/SignUp/SignUp';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/HomePage/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import ManageInventorys from './pages/ManageInventorys/ManageInventorys.jsx'
import NotFound from './pages/Shared/NotFound/NotFound';
import AddItem from './pages/AddItem/AddItem';
import RequireAuth from './RequireAuth/RequireAuth';
import MyItem from './pages/MyItem/MyItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Toaster
            position="top-right"
            reverseOrder={false}
          />
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/logIn' element={<LogIn></LogIn>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/manageInventory' element={
          <RequireAuth>
            <ManageInventorys></ManageInventorys>
          </RequireAuth>
        }></Route>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/myItem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
