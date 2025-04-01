import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserAuthStore } from './store/UserAuthStore';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import { Loader } from 'lucide-react';

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = UserAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log({ authUser });

  if (isCheckingAuth && !authUser) return (
    <Loader className = "size-10 animate-spin "/>
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 mt-16 bg-gray-100"> {/* Changed pt-16 to mt-16 for better spacing */}
        <div className="container mx-auto px-4">
          <Routes>
            <Route path='/' element={authUser ? <HomePage /> : <Navigate to = "/login"/>} />
            <Route path='/signup' element={!authUser ? <SignupPage /> : <Navigate to = "/"/>}/>
            <Route path='/login' element={ !authUser ? <LoginPage /> : <Navigate to = "/"/>} />
            <Route path='/settings' element={<SettingsPage />} />
            <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to = "/login"/>} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
