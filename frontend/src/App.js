/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import { Button } from './stories/Button/Button';
import Input from './stories/Input/Input';
import PasswordInput from './stories/Input/PasswordInput';

function App() {
  const [status, setStatus] = useState('default');
  const [message, setMessage] = useState('');

  const onClickHandler = () => {
    if (status === 'success') {
      setStatus('error');
      setMessage('사용 불가능한 아이디입니다.');
    } else {
      setStatus('success');
      setMessage('사용 가능한 아이디입니다.');
    }
  };

  return (
    <div className="App">
      <form style={{ width: '500px' }}>
        <Input type="email" placeholder="example@inflab.com" status={status} message={message} label="이메일" />
        <PasswordInput placeholder="******" label="비밀번호" />
        <PasswordInput placeholder="******" label="비밀번호 확인" />
        <Button color="primary" size="maxWidth" round="round" children="로그인" onClick={onClickHandler} />
      </form>
    </div>
  );
}

export default App;
