import "./stylesheet/app.scss";
import { SearchBar } from "./component/SearchBar/searchBar";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a book title..." />
    </div>
  );
}

export default App;
