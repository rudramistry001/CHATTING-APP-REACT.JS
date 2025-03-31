import {create} from 'zustand';
import axiosInstance from '../lib/axios.js'

export const UserAuthStore = create((set) =>({
    authUser:null,
    isCheckingAuth:true,
    isSigningUp:false,
    isLoggingIn:false,
    isUpatingProfile:false,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get('/auth/check-auth');
            set({ authUser: res.data.user, isCheckingAuth: false });
        } catch (error) {
            set({ authUser: null, isCheckingAuth: false });
        }
    },
    
    signUp: async (userData) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post('/auth/signup', userData);
            set({ authUser: res.data.user, isSigningUp: false });
            return res.data;
        } catch (error) {
            set({ isSigningUp: false });
            throw error;
        }
    },
    
    signIn: async (credentials) => {
        set({ isLoggingIn: true });
        try {
            const res = await axiosInstance.post('/auth/login', credentials);
            set({ authUser: res.data.user, isLoggingIn: false });
            return res.data;
        } catch (error) {
            set({ isLoggingIn: false });
            throw error;
        }
    },
    
    signOut: async () => {
        try {
            await axiosInstance.post('/auth/logout');
            set({ authUser: null });
        } catch (error) {
            throw error;
        }
    },
    
    updateProfile: async (profileData) => {
        set({ isUpatingProfile: true });
        try {
            const res = await axiosInstance.put('/auth/profile', profileData);
            set({ authUser: res.data.user, isUpatingProfile: false });
            return res.data;
        } catch (error) {
            set({ isUpatingProfile: false });
            throw error;
        }
    }
})
);