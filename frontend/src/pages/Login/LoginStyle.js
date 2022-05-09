import styled from 'styled-components';

export const InflearnLogo = styled.div`
  display: flex;
  justify-content: center;
  margin: 12px 0 24px;
`;

export const LoginForm = styled.form`
  display: flex;
  align-content: center;
  flex-direction: column;
  > * {
      margin-bottom: 12px;
  }
`;

export const MoreAction = styled.p`
margin-top: 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  >span{
      margin-left: 10px;
  }
`;

export const FindPassword = styled.span`
    letter-spacing: -.3px;
    font-size: 13px;
    font-weight: 400;
    color: #616568;
    border-bottom: 1px solid #858a8d;
    cursor: pointer;
`;

export const SignUp = styled.span`
  letter-spacing: -.3px;
  font-size: 13px;
  font-weight: 400;
  color: #616568;
  border-bottom: 1px solid #858a8d;
cursor: pointer;
::before{
    content: "|";
    margin-right: 5px;
}
`;

export const SocialLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
>hr{
    position: relative;
    bottom: -8px;
    display: block;
    margin: 0;
    width: 100%;
    height: 1px;
    background-color: #f1f3f5;
    border: none;
}
>span{
    padding: 0 8px;
    margin-bottom: 16px;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: -.3px;
    color: #abb0b5;
    z-index: 11;
    background-color: #fff;
}
`;

export const SocialLoginButtons = styled.div`
display: flex;
margin-bottom: 20px;
>*{
    margin-left: 10px;
}
`;
