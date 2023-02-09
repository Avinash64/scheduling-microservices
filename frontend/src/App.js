import logo from './logo.svg';
import './App.css';
import Register from './Register';
import PeopleList from './PeopleList';
import { useState } from 'react';

function App() {
  const [up,setUp] = useState(0)
  return (
      <div className="app">
        <Register />
        <PeopleList/>
      </div>
  );
}

export default App;
