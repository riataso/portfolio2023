import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Profile from './component/Profile';
import Skill from './component/Skill';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={< Home /> } />
        <Route path="/Skill" element={< Skill /> } />
        <Route path="/Profile" element={  <Profile /> } />
       

      </Routes>
      </div>
    </Router >
    
      
      

   
  );
}

export default App;
