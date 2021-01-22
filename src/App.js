import './App.css';
import { Router } from "@reach/router";
import Featured from "./pages/Featured";
import Categories from "./pages/Categories";

function App() {
  return (
    <Router>
      <Featured path="/featured" />
      <Categories path="/categories" />
    </Router>
  );
}

export default App;
