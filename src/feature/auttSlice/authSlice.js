import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    token: null,
    user: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            const { token, user } = action.payload;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            state.isAuth = true;
            state.token = token;
            state.user = user;
        },
        logout(state) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            state.isAuth = false;
            state.token = null;
            state.user = null;
        },
        setAuth(state) {
            const token = localStorage.getItem('token');
            const user = JSON.parse(localStorage.getItem('user'));
            if (token && user) {
                state.isAuth = true;
                state.token = token;
                state.user = user;
            }
        }
    }
});

export const { login, logout, setAuth } = authSlice.actions;

export default authSlice.reducer;
