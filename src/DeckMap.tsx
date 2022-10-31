import DeckGL from "@deck.gl/react/typed";
import { Layer, Map, Source } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef, useState } from "react";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiY2tsZWltYW4xNSIsImEiOiJjazhseTJvcnMwOWdvM2hvOHE2ejk0ZHhoIn0.dp27-MIUTPYjRr-VLw1Rqg";

const INITIAL_VIEW_STATE = {
  latitude: 39.953887,
  longitude: -75.2581121,
  zoom: 13,
};

export default function DeckMap() {
  const [visible, setVisible] = useState(false);

  return (
    <DeckGL
      style={{ width: "100vw", height: "100vh" }}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
    >
      <Map
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Source id="trees" type={"vector"} url="mapbox://ckleiman15.c1vifa8h">
          <Layer
            id="fill"
            type="fill"
            source-layer="trees_big"
            paint={{ "fill-color": "#0f0" }}
            layout={{visibility: visible ? 'visible' : 'none'}}
          ></Layer>
        </Source>
      </Map>
    </DeckGL>
  );
}
