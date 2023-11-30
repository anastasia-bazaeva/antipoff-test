import { createSlice } from "@reduxjs/toolkit"

type AuthState = {
    isAuth: boolean,
}

const initialState: AuthState = {
    isAuth: false,
}

export const AuthModel = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state) => {
            state.isAuth = true;
          },
        removeAuth: (state) => {
            state.isAuth = false;
        }
    }
});
export const { setAuth, removeAuth } = AuthModel.actions;
