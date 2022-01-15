import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

export const getCovidDataAsync=createAsyncThunk('covid/getCovidDataAsync',async ()=>{
    const response=await fetch('https://covid19.mathdro.id/api');
    return await response.json();
});

export const getCountriesAsync=createAsyncThunk('covid/getCountriesAsync',async ()=>{
    const response=await fetch('https://covid19.mathdro.id/api/countries');
    return await response.json();
});

export const getCovidDataByCountry=createAsyncThunk('covid/getCovidDataByCountry',async (countryName)=>{
    const response=await fetch('https://covid19.mathdro.id/api/countries/'+countryName);
    return await response.json();
});



export const covidSlice=createSlice({
    name:'covid',
    initialState:{
        countries:[],
        global:[],
        isLoading:false,
        countryData:[]

    },
    reducers:{

    },
    extraReducers:{
        [getCovidDataAsync.fulfilled]:(state,action)=>{
            state.global=action.payload;
        },
        [getCountriesAsync.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [getCountriesAsync.fulfilled]:(state,action)=>{
            state.countries=action.payload.countries;
            state.isLoading=false
        },
        [getCovidDataByCountry.fulfilled]:(state,action)=>{
            state.countryData=action.payload;
        }
    }

});

export const selectCovidGlobal=(state)=>state.covid.global;
export const selectCountry=(state)=>state.covid.countries;

export const selectLoading=(state)=>state.covid.isLoading;

export default covidSlice.reducer;



