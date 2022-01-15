import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import covidSlice, { getCountriesAsync, selectCountry, getCovidDataByCountry, selectLoading } from "../../redux/covidSlice/covidSlice";
import { Select } from '../styledComponents/Select';

export default function CountryList() {

    const [selectedCountry, setSelectedCountry] = useState("");

    const dispatch = useDispatch();

    const countries = useSelector(state => state.covid.countries);
    const isLoading = useSelector(state => state.covid.isLoading);

    console.log(isLoading)

    useEffect(() => {
        dispatch(getCountriesAsync());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getCovidDataByCountry(selectedCountry));
        console.log(selectedCountry)
    }, [selectedCountry]);
    if (isLoading) {
        return (
            <div>
                Loading....
            </div>
        )
    }

    const handleChangeCountry=(e)=>{
        if(e.target.value!=='global'){
            setSelectedCountry(e.target.value)
        }
       
    }

    return (
        <div>
            <Select onClick={handleChangeCountry}>
                <option value="global">Global</option>
                {

                    countries.length > 0 ? countries.map((country, index) => <option key={index} value={country.name}>{country.name}</option>) : <></>
                }

            </Select>
        </div>
    )


}
