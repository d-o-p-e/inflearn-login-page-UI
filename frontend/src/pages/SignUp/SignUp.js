import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { SignUpForm, SignUpSection, SignUpTitle, SubTitle } from './SignUpStyle';

function SignUp() {
  return (
    <SignUpSection>
      <SignUpTitle>회원가입</SignUpTitle>
      <SubTitle>성장에 목마를 때, 인프런</SubTitle>
      <SignUpForm>
        <Input title="이메일" placeholder="example@inflab.com" />
        <Input title="비밀번호" placeholder="********" type="password" />
        <Input title="비밀번호 확인" placeholder="********" type="password" />
        <Button width="300px">가입하기</Button>
      </SignUpForm>
    </SignUpSection>
  );
}

export default SignUp;
