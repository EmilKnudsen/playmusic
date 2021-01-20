import './App.css';
import { Router } from "@reach/router";
import Featured from "./pages/Featured";

function App() {
  return (
    <Router>
      <Featured path="/featured" />
    </Router>
  );
}

export default App;
