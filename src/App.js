import './App.css';
import { Router } from "@reach/router";
import Featured from "./pages/Featured";
import Categories from "./pages/Categories";
import Songs from './pages/Songs';
import Playlists from "./pages/Playlists";
import Player from './pages/Player';

function App() {
  return (
    <Router>
      <Featured path="/featured" />
      <Categories path="/categories" />
      <Playlists path="/playlists" />
      <Player path="/player" />
      <Songs path="/songs" />
    </Router>
  );
}

export default App;
