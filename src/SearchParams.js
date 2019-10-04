import React, { useState } from 'react';

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA")

  const handleChange = event => setLocation(event.target.value)

  return (
    <div className="search-params">

      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="Location" onChange={handleChange}/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams;