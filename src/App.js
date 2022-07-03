import React, { useState } from 'react';

import Cards from './components/cards/Cards';
import Hero from './components/hero/Hero';
import Particle from './components/particle/Particle';

import classes from './App.module.css';

function App() {
  // states
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  // handler
  const handleSearch = e => {
    setPageNumber(1);
    setQuery(e.target.value);
  };

  return (
    <div className={classes.container}>
      <Hero />
      <Particle style={classes.particle} />

      {/* Search functionality */}
      <div className={classes.inputBox}>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          className={classes.input}
          id="query"
          placeholder="Search mission name ..."
        />
        <label htmlFor="query" className={classes.label}>
          Search mission name &uarr;
        </label>
      </div>

      {/* Render Launches */}
      <Cards
        query={query}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;
