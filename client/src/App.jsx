import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Dashboard from './components/Dashboard'
import './App.css'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import 'react-toastify/dist/ReactToastify.css';
import RefreshHandler from './components/RefreshHandler'
import UserProfile from './components/UserProfile'
import TripDetails from './components/TripDetails'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRouter = ({element}) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  }

  return (
    <Router>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<PrivateRouter element={<Dashboard />} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<PrivateRouter element={<UserProfile />} />} />
        <Route path="/trip/:id" element={<PrivateRouter element={<TripDetails />} />} />
      </Routes>
    </Router>
  )
}

export default App
