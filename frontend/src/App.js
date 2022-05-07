import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Register from './pages/Register/Register';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
