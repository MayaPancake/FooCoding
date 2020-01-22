import React from 'react';
import './App.css'
import './ShoeDetails.css'
import ShoeLists from './ProductList'
import Nav from './Nav';

function App() {
  return (
    
    <div className="App">
      <Nav />
        <ShoeLists />
      
    </div>
  );
}

export default App;
