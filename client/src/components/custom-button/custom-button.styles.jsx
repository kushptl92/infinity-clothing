import styled, {css} from 'styled-components';


const buttonBaseStyles = css`
background-color: dodgerblue;
color: white;
border: none;
&:hover{
    background-color: white;
    color: dodgerblue;
    border: 1px solid dodgerblue;
}
`;

const invertedButonStyle= css`
background-color: white;
color: dodgerblue;
border: 1px solid dodgerblue;
&:hover{
background-color: dodgerblue;
color: white;
border: none;
}
`;


const googleSignInButton = css`
background-color: #DB4437;
color: white;
&:hover{
  background-color: #357ae8;
  border: none
}
`;


const getButtonStyles = props => {
if (props.isGoogleSignIn){
    return googleSignInButton;
}
return props.inverted ? invertedButonStyle : buttonBaseStyles;
};

export const CustomButtonContainer = styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 15px;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
cursor: pointer;
display: flex;
justify-content: center;
${getButtonStyles}
`;