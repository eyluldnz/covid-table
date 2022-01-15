import styled from 'styled-components';

const Select=styled.select`
background-color: ${props=>props.theme.buttonColor};
background-color:#ddd;
    margin-right: -1.2em;
    padding: .72em .5em;
    border-radius: .2em 0em 0em .2em;
    border: none;
    cursor: pointer;
&:hover {
    color:${props=>props.theme.hoverColor};
 }
`
export {Select}