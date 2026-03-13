import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/LandingPage/Home'
import Signin from './pages/Auth/Signin'
import Signup from './pages/Auth/Signup'
import Dashboard from './pages/Dashboard/Dashboard';
// import Board from './pages/JobTracker/Board'

function App() {
 

  return (
    <>
    {/* <Home /> */}

     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/board" element={<Board />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
       
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/contacts" element={<Contacts />} /> */}
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
