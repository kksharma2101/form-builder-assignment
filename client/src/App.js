import "./App.css";
import Categories from "./components/category/Categories.js";
import Header from "./components/header/Header.js";

function App() {
  return (
    <div className="ml-10 mr-10">
      <Header />
      <Categories />
    </div>
  );
}

export default App;
