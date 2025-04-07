import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './features/auth/LoginPage';
import SignUpPage from './features/auth/SignUpPage';
import HomePage from './features/home/HomePage';
import ProfilePage from './features/profile/ProfilePage';
import Navbar from './shared/components/Navbar';

const App = () => {

  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/home"
            element={
                <HomePage />
            }
          />
          <Route
            path="/profile"
            element={
                <ProfilePage />
            }
          />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;