import * as React from "react";

const { useEffect, useState } = React;

const ShapesLayer: React.FC<{
  show: boolean;
  map: any;
}> = () => {
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (map) {
      map.on("load", () => setMapLoaded(true));
    }
  }, [map]);
  return "";
};

export default ShapesLayer;
