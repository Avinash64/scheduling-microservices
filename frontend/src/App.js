import logo from './logo.svg';
import './App.css';
import Register from './Register';
import PeopleList from './PeopleList';
import { useState } from 'react';
import Site from './Site';
import SiteList from './SiteList';

function App() {
  const [up,setUp] = useState(0)
  return (
      <div className="app">
        <Register />
        <PeopleList/>
        <Site/>
        <SiteList/>
      </div>
  );
}

export default App;
