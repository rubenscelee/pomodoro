import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Container from './Layout/Container';
import PrincipalContainer from './Layout/PrincipalContainer';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import NoPage from './Pages/NoPage';
import Navbar from './Layout/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <PrincipalContainer>
          <Routes>
                <Route index element={<HomePage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                {/* <Route path="*" element={<NoPage />} /> */}
            </Routes>
        </PrincipalContainer>
      </Router>
    </div>
  );
}

export default App;
