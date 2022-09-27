import React from 'react';
import SearchBar from './SearchBar';



const options = [
  {
    name : "AliceBlue",
    code : "#f0f8ff"
  },
  {
    name: "Aqua",
    code: "#00FFFF"
  },
  {
    name: "Blue",
    code: "#0000FF"
  },
  {
    name: "Chartreuse",
    code: "#7FFF00"
  },
  {
    name: "FireBrick",
    code: "#B22222"
  },
  {
    name: "HotPink",
    code: "#FF69B4"
  },
  {
    name: "Teal",
    code: "#008080"
  },
  
]

function App() {
  return (
    <div className="container mx-auto w-full flex flex-col items-center ">
      <h1 className="text-4xl font-semibold py-4"> 
        Autocomplete Searchbar
      </h1>

      <SearchBar options={options}/>
    </div>
  );
}

export default App;
