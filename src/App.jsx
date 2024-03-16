import Nav from './Navbar/Nav'
import { BrowserRouter as Rou, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Component/Home/Home';
function App() {
  return (
    <>
     <div className='app'>
     <Rou>
     <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
     </Rou>
     </div>
    </>
  )
}

export default App
