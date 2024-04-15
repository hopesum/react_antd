import { createSlice } from '@reduxjs/toolkit'


import { persistStore, persistReducer } from 'redux-persist';
//  存储机制，可换成其他机制，当前使用sessionStorage机制
import storageSession from 'redux-persist/lib/storage/session';
const storageConfig = {
  key: 'root', // 必须有的
  storage: storageSession, // 缓存机制
  blacklist: [], // reducer 里不持久化的数据,除此外均为持久化数据
};


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { setUser } = userSlice.actions
export default persistReducer(storageConfig, userSlice.reducer) 

