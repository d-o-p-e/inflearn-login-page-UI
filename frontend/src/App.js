/* eslint-disable react/no-children-prop */
import { Button } from './stories/Button';

function App() {
  return (
    <div className="App">
      <Button color="primary" size="small" children="hi" />
    </div>
  );
}

export default App;
