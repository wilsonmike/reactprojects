import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState('');

  console.log('run every render');

  useEffect(() => {
    console.log('useeffect');
  }, [])

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input 
          value={term}
          onChange={e => setTerm(e.target.value)}
          className="input" />
        </div>
      </div>
    </div>
  )
};

export default Search;
