import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../stories/Input/Input';

export const EmailInput = styled(Input)`
  margin-bottom: 0;
`;

export const LinkAction = styled.div`
  display: flex;
  margin: 1rem;
  justify-content: center;
  span {
    position: relative;
    right: 0.3rem;
    font-size: 11px;
  }
  `;

export const CustomLink = styled(Link)`
  margin-right: 10px;
  border-bottom: 1px solid grey;
  font-size: 13px;
  color: black;
  text-decoration: none;
  // &:after {
  //   content: ${({ content }) => content};
  // }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  hr {
    position: relative;
    top: 0.6rem;
    margin: 0;
    width: 100%;
    border: 1px solid lightgrey;
  }
  span {
    font-size: 13px;
    background-color: white;
    padding: 0 0.3rem;
    color: grey;
    z-index: 5;
  }
`;

export const SocialAuth = styled.div`
  margin-top: 1rem;
`;
