import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import './App.css';
import GetEmp from './components/getEmp';
import CreateEmp from './components/CreateEmp';

function App() {
  return (
    <Router>
      <Navbar />
      <h2>Employee Information System</h2>
      <Routes>
        <Route path="/" element={<GetEmp />} />
        <Route path="/getEmp" element={<GetEmp />} />
        <Route path="/createEmp" element={<CreateEmp />} />
      </Routes>
    </Router>
  );
}

export default App;