
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './pages/Auth/LogIn/LogIn';
import SignUp from './pages/Auth/SignUp/SignUp';
import Home from './pages/HomePage/Home/Home';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/logIn' element={<LogIn></LogIn>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
