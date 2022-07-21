import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Root } from './components/layouts/root';
import { Helmet } from 'react-helmet';

const rootSection = (
  <>
    <Root/>
  </>
);

function App() {
  return (<>
    <Helmet
      titleTemplate="%s - Atlantis OCMD"
    />
      <Routes>
        <Route path="*" element={rootSection}></Route>
      </Routes>
  </>);
}

export default App;
