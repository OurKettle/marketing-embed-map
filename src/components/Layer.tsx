import * as React from "react";

const { useEffect, useState } = React;

const SpreadLayer: React.FC<{
  show: boolean;
  layerName: string;
  map: any;
}> = ({ show, layerName, map }) => {
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  function showLayer() {
    const layer = map.style.getLayer(layerName);
    if (layer) {
      map.setLayoutProperty(layerName, "visibility", "visible");
    }
  }
  function hideLayer() {
    const layer = map.style.getLayer(layerName);
    if (layer) {
      map.setLayoutProperty(layerName, "visibility", "none");
    }
  }

  useEffect(() => {
    if (show && mapLoaded) showLayer();
    if (!show && mapLoaded) hideLayer();
  }, [show]);

  useEffect(() => {
    if (map) {
      map.on("load", () => {
        setMapLoaded(true);
        if (show) showLayer();
        if (!show) hideLayer();
      });
    }
  }, [map]);
  return null;
};

export default SpreadLayer;
