import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Root } from './components/layouts/root';

const rootSection = (
  <>
    <Root/>
  </>
);

function App() {
  return (
    <Routes>
      <Route path="*" element={rootSection}></Route>
    </Routes>
  );
}

export default App;
