// import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '~/assets/fonts/font-awesome-6.5.2/css/all.min.css';

import './App.css';
import { publicRoutes } from '~/routes';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
