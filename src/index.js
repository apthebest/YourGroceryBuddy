import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddReview from './AddReview'

ReactDOM.render(
  <React.StrictMode>
    {/* <Navbar></Navbar> */}
    <Router>
      <Routes>
        <Route path="/"element={<App></App>}></Route>
        <Route path="/addReviews" element={<AddReview></AddReview>}></Route>
      </Routes>
       
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
