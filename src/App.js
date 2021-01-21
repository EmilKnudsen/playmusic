import './App.css';
import { Router } from "@reach/router";
import Featured from "./pages/Featured";
import Nav from "./pages/Nav";
import TopNavigator from './components/TopNavigator';

function App() {
  return (
    <Router>
      <Featured path="/featured" />
      <Nav path="/nav" />
      <TopNavigator path="/topnav" />
    </Router>
  );
}

export default App;
