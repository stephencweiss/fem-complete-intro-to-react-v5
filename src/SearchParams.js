import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  //   const [animal, setAnimal] = useState("dog");

  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDrowdown] = useDropdown("Breed", "dog", breeds);

  const handleLocationChange = event => setLocation(event.target.value);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={handleLocationChange}
          />
        </label>
        <AnimalDropdown />
        <BreedDrowdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
