import {configureStore} from '@reduxjs/toolkit'
import newsReducer from '../Redux/NewsSlice'
export default configureStore({
    reducer:{
       newsReducer
    }
})