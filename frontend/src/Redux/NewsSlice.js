import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export const getLandNews=createAsyncThunk('u/getLandNews',async (_,thunkAPI)=>{
    try {
        thunkAPI.dispatch(setLoading(true));
        const res=await axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c595aa2808d44f65896efdc7b29781de')
        console.log(res);
        return res.data.articles;
        
    } catch (e) {
        
        console.log(e);
    }
    finally{
        thunkAPI.dispatch(setLoading(false));
    }
})
export const getNewsOf=createAsyncThunk('getNewsOf',async(body,thunkAPI)=>{
    try {
        thunkAPI.dispatch(setLoading(true));
        const newsof=body.newsof;
        console.log(newsof);
        if(newsof=='Science'){
            const res=await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de')
            console.log(res.data.articles);
            return res.data.articles;
        }
        else if(newsof=='Technology'){
            const res=await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de')
            console.log(res.data.articles);
            return res.data.articles;
        }
        else if(newsof=='Business'){
            const res=await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de')
            console.log(res.data.articles);
            return res.data.articles;
        }
        else if(newsof=='Entertainment'){
            const res=await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de')
            console.log(res.data.articles);
            return res.data.articles;
        }
        
    } catch (e) {
        console.log(e);
    }
    finally{
        thunkAPI.dispatch(setLoading(false));
    }
})



const newsSlice=createSlice({
    name:'newsSlice',
    initialState:{
        isLoading:false,
        newsOf:'',
        landNews:[],
        catNewsOf:[]
    },
    reducers:{
        setLoading:(state,action)=>{
            state.isLoading=action.payload
        },
        setnewsOf:(state,action)=>{
            console.log(action.payload);
            state.newsOf=action.payload
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getLandNews.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.landNews=action.payload
        })
        .addCase(getNewsOf.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.catNewsOf=action.payload;

        })
    }

    
})





export default newsSlice.reducer;

export const {setLoading,setnewsOf}=newsSlice.actions