import * as React from "react";
import Map from "./components/Map";
import { MapProps } from "./types";

const App: React.FC<MapProps> = ({
  showSpreadLayer = true,
  showFireShapeLayer = true,
  className = "",
  settings = {
    zoom: 5,
    lat: 37.942291,
    lon: -120.499532,
    pitch: 0,
  },
}) => {
  return (
    <Map
      className={className}
      showSpreadLayer={showSpreadLayer}
      showFireShapeLayer={showFireShapeLayer}
      settings={settings}
    />
  );
};

export default App;
