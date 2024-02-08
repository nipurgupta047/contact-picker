import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HomePage from './features/homePage/HomePage';
import ExtractDataFromSpeech from './features/extractDataFromSpeech/ExtractDataFromSpeech';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/template' element={<ExtractDataFromSpeech />} />
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
