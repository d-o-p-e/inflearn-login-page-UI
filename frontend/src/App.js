/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import * as Style from './components/Input/Input';
import { Modal } from './components/modal/Modal';

function App() {
  const [open, setOpen] = useState(false);
  const toggleStatus = () => {
    setOpen((pre) => !pre);
  };
  return (
    <div className="App">
      <button type="button" onClick={toggleStatus}>모달 열기창</button>
      <Modal status={open} onClose={toggleStatus} headerContent={<div>안녕하세요</div>} bodyContent={<div>반가워요</div>} footerContent={<div>반가워요</div>} />
    </div>
  );
}

export default App;
