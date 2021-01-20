import './App.css';
import { Router } from "@reach/router";
import Featured from "./pages/Featured";
import Nav from "./pages/Nav";

function App() {
  return (
    <Router>
      <Featured path="/featured" />
      <Nav path="/nav" />
    </Router>
  );
}

export default App;
