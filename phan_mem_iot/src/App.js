import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from '~/pages/Login'
import Home from '~/pages/Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Hàm xử lý khi đăng nhập thành công
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            isLoggedIn ? (
              <div className="App">
                <Home />
              </div>
            ) : (
              <Login onLoginSuccess={handleLoginSuccess} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
