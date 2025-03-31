import React from 'react'
import { UserAuthStore } from '../store/UserAuthStore.js';

const ProfilePage = () => {
    const { authUser } = UserAuthStore();
    return (
        <div className="py-8">
            <h1 className="text-2xl font-bold text-center mb-6">Your Profile</h1>
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <p>Profile information will be displayed here</p>
            </div>
        </div>
    )
}

export default ProfilePage
