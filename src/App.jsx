import Nav from './Navbar/Nav'
import { BrowserRouter as Rou, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Component/Home/Home';
import Blog from './Component/Blog/Blog';
import Footer from './footer/Footer';
function App() {
  return (
    <>
     <div className='app'>
     <Rou>
     <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='blog' element={<Blog/>}/>
      </Routes>
      <Footer/>
     </Rou>
     </div>
    </>
  )
}

export default App
