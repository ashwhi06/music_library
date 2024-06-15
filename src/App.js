import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";

function App() {
  let [search, setSearch] = useState("");
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState([]);

  const API_URL = "https://itunes.apple.com/search?term=";

  useEffect(() => {
    const fetchData = async () => { // This function runs when the component loads.
        document.title = `${search} Music`
        const response = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead')
        const resData = await response.json()
        if (resData.results.length > 0) { // If the search term returns results, then...
            setData(resData.results)
        } else {
            setMessage('Not Found')
        }
    }
    fetchData()
}, [search])


  const handleSearch = (e, term) => {
    // This function runs when the user submits the search form.
    e.preventDefault(); // Prevents the page from reloading.
    setSearch(term); // Sets the search term to the value of the input field.
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      {message}
      <Gallery data={data} />
    </div>
  );
}

export default App;
