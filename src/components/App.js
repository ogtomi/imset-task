import React from "react";

import Tile from "./Tile";
import HeadBar from "./HeadBar";
import BottomBar from "./BottomBar";

import "../css/index.css";
import images from "../Data";

const App = () => {
  return (
    <div>
      <HeadBar />
      <div class="row justify-content-center">
        <Tile
          title="ZYSKAJ WIĘCEJ"
          description="opis"
          size="tile-large"
          bgImage={images[0]}
        />
        <Tile
          title="VOD"
          description="opis"
          size="tile-small"
          bgImage={images[1]}
        />
      </div>
      <div class="row justify-content-center">
        <Tile
          title="Stwórz swój własny pakiet"
          description="opis"
          size="tile-large"
          bgImage={images[2]}
        />
        <Tile
          title="Teraz w TV online"
          description="opis"
          size="tile-small"
          bgImage={images[3]}
        />
      </div>
      <div class="row justify-content-center">
        <Tile title="Pakiet 20GB LTE" description="opis" size="tile-small" />
        <Tile
          title="Nasz support"
          description="opis"
          size="tile-small"
          bgImage={images[4]}
        />
        <Tile title="Aplikacja" description="opis" size="tile-small" />
      </div>
      <BottomBar />
    </div>
  );
};

export default App;
