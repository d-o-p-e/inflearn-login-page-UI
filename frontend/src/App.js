/* eslint-disable react/no-children-prop */
import { Button } from './stories/Button/Button';

function App() {
  return (
    <div className="App">
      <Button color="primary" size="wide" children="로그인" />
    </div>
  );
}

export default App;
