import {useState} from "react";
import './App.css';
import './style.scss';
import './media-query.css';
import Home from './pages/home';
import Detail from './pages/details';
import Auth from './pages/auth';
import EditBlog from './pages/editblog';
import About from './pages/about';
import NotFound from './pages/notfound';
import Header from './components/header';
import {Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [active, setActive] = useState("home");
  return (
    <div className="App">
    <Header setActive={setActive} active={active}/>
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/create/" element={<EditBlog/>}/>
        <Route path="/update/:id" element={<EditBlog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
