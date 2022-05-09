/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import * as Style from './components/Input/Input';
import { Modal } from './components/modal/Modal';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

function App() {
  const [open, setOpen] = useState(false);
  const toggleStatus = () => {
    setOpen((pre) => !pre);
  };
  return (
    <div className="App">
      <SignUp />
      <hr />
      <Login />
    </div>
  );
}

export default App;
