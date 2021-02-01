import './App.css';
import { Router } from "@reach/router";
import Featured from "./pages/Featured";
import Categories from "./pages/Categories";
import Songs from './pages/Songs';
import Playlists from "./pages/Playlists";
import Player from './pages/Player';
import Album from './pages/Album';
import Login from "./pages/Login";
import Callback from './pages/Callback';
import TokenContext from './TokenContext';
import { useState } from "react";
import Featuring from './pages/Featuring';

function App() {
  var tokenState = useState(null);

  return (
    <TokenContext.Provider value={tokenState}>
    <Router>
      <Login default />
      <Callback path="/callback" />
      <Featured path="/featured" />
      <Categories path="/categories" />
      <Playlists path="/playlists" />
      <Player path="/player" />
      <Songs path="/songs" />
      <Album path="/album" />
      <Featuring path="/featuring" />
    </Router>
    </TokenContext.Provider>
  );
}

export default App;
