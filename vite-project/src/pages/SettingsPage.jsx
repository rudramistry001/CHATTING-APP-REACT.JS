import React from 'react'
import { UserAuthStore } from '../store/UserAuthStore.js';

const SettingsPage = () => {
      const {authUser} = UserAuthStore();
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Account Settings</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <p>Settings options will be available here</p>
      </div>
    </div>
  )
}

export default SettingsPage
