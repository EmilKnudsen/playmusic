import './App.css';
import { Router } from "@reach/router";
import Featured from "./pages/Featured";
import Categories from "./pages/Categories";
import Songs from './pages/Songs';

function App() {
  return (
    <Router>
      <Featured path="/featured" />
      <Categories path="/categories" />
      <Songs path="/songs" />
    </Router>
  );
}

export default App;
