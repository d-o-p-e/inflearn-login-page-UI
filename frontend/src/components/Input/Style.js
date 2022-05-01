import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PasswordIcon = styled(FontAwesomeIcon)`
    margin-left: -23px;
`;

export const Section = styled.div`
padding: 10px;
`;

export const Input = styled.input`
height: 32px;
font-size: 15px;
border: 1px solid #DEE2E6;
border-radius: 4px;
padding-left: 10px;
padding-right: 20px;
outline: none; //이거 때문에 focus시에 내가 원하던 색 적용이 안되었음
&:focus{
    border-color: #00C471;
    box-shadow: inset 0px 0px 0px 1px #00C471;
};
::placeholder{
    color: #D1D6DC;
}
${(width) => width};
`;

export const Title = styled.span`
display: block;
padding: 0 0.25rem;
margin-bottom: 5px;
font-size: 0.75rem;
background-color: white;
color: #3E406C;
`;

export const ErrorMessage = styled.span`
display: block;
padding: 0 0.25rem;
margin-bottom: 5px;
font-size: 0.75rem;
background-color: white;
color:#E96D5C;
`;
