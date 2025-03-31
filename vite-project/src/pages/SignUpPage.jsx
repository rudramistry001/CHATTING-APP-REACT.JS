import React from 'react'
import { UserAuthStore } from '../store/UserAuthStore.js';

const SignUpPage = () => {
      const {authUser} = UserAuthStore();
  return (
    <div>
      SignUpPage
    </div>
  )
}

export default SignUpPage
