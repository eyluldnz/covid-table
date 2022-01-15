import styled from 'styled-components';

const StyledCard = styled.div `
width:300px;
height:300px;
float:left;
margin:10px;
background-color:${props=>props.color};
border: 1px solid black;

&:hover {
   
 }
`
export {
    StyledCard
}