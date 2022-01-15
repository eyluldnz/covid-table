import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import covidSlice, { selectCovidGlobal } from "../../redux/covidSlice/covidSlice";

import { CardContainer } from '../styledComponents/CardContainer'
import { StyledCard } from '../styledComponents/StyledCard'

export default function CountryList() {

    const selectCovidGlobal = useSelector(state => state.covid.countryData);
    console.log(selectCovidGlobal)

    return (
        <div >
            {
                typeof (selectCovidGlobal) === 'object' && selectCovidGlobal.confirmed && selectCovidGlobal.deaths && selectCovidGlobal.recovered ?
                    <CardContainer>
                        <StyledCard color="green">
                            <h1>Confirmed:</h1>
                            <h4>{selectCovidGlobal.confirmed ? selectCovidGlobal.confirmed.value : 0}</h4>
                            <h5>Last Update: {selectCovidGlobal.lastUpdate ? selectCovidGlobal.lastUpdate : 0}</h5>
                        </StyledCard>
                        <StyledCard color="red">
                            <h1>Death: </h1>
                            <h4>{typeof (selectCovidGlobal) === 'object' ? selectCovidGlobal.deaths.value : 0}</h4>
                            <h5>Last Update: {typeof (selectCovidGlobal) === 'object' ? selectCovidGlobal.lastUpdate : 0}</h5>
                        </StyledCard>

                        <StyledCard color="bisque">
                            <h1>Recovered: </h1>
                            <h4>{typeof (selectCovidGlobal) === 'object' ? selectCovidGlobal.recovered.value : 0}</h4>
                            <h5>Last Update: {typeof (selectCovidGlobal) === 'object' ? selectCovidGlobal.lastUpdate : 0}</h5>
                        </StyledCard>
                    </CardContainer> :
                    <CardContainer>
                        <StyledCard color="green">
                            <h1>Confirmed:</h1>
                            <h4></h4>
                            <h5>Last Update: </h5>
                        </StyledCard>
                        <StyledCard color="red">
                            <h1>Death: </h1>
                            <h4></h4>
                            <h5>Last Update: </h5>
                        </StyledCard>

                        <StyledCard color="bisque">
                            <h1>Recovered: </h1>
                            <h4></h4>
                            <h5>Last Update: </h5>
                        </StyledCard>
                    </CardContainer>


            }

        </div>
    )
}
