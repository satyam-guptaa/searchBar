import "./stylesheet/app.scss";
import { SearchBar } from "./component/SearchBar/searchBar";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a book title..." data={data} />
    </div>
  );
}

export default App;
