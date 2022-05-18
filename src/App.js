import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import AddItem from './Components/AddItem/AddItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route> 
        <Route path='/login' element={<Login></Login>}></Route> 
        <Route path='/register' element={<Register></Register>}></Route> 
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
