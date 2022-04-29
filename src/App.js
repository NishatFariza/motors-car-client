
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/HomePage/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/logIn' element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
