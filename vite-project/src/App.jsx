import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserAuthStore } from './store/UserAuthStore';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  const { authUser, checkAuth } = UserAuthStore();
  
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 mt-16 bg-gray-100"> {/* Changed pt-16 to mt-16 for better spacing */}
        <div className="container mx-auto px-4">
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/settings' element={<SettingsPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
