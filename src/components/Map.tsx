import * as React from "react";

import Mapboxgl from "mapbox-gl";
import Layer from "./Layer";
import { MapSettings } from "../types";

Mapboxgl.accessToken =
  "pk.eyJ1Ijoia2V0dGxla2V0dGxlIiwiYSI6ImNrbGxkZDR2ZDEwMDgycGx5cm83ejl5NWQifQ.Jc5tHw94MokeSr2jFqT4ow";

const { useEffect, useRef } = React;

const Map: React.FC<{
  showSpreadLayer: boolean;
  showFireShapeLayer: boolean;
  className: string;
  settings: MapSettings;
}> = ({ showSpreadLayer, showFireShapeLayer, className, settings }) => {
  const [baseMap, setBaseMap] = React.useState<any>(null);
  const baseMapEl = useRef() as React.MutableRefObject<HTMLDivElement>;

  const initializeMap = () => {
    if (baseMapEl) {
      const map = new Mapboxgl.Map({
        container: baseMapEl.current,
        style: "mapbox://styles/kettlekettle/ckk79y38t06x617pg5v5z87rq",
        center: [settings.lon!, settings.lat!],
        zoom: settings.zoom,
        pitch: settings.pitch,
      });

      setBaseMap(map);
    }
  };

  useEffect(() => {
    if (baseMap) {
      baseMap.scrollZoom.setZoomRate(1 / 600); // PERFORMANCE: slow down zoom rate
      baseMap.addControl(new Mapboxgl.NavigationControl(), "top-right");
    }
  }, [baseMap]);

  useEffect(() => {
    if (baseMapEl) {
      initializeMap();
    }
  }, [baseMapEl]);

  return (
    <>
      {baseMap && (
        <>
          <Layer
            map={baseMap}
            layerName="spreadfeb21310"
            show={showSpreadLayer}
          />
          <Layer map={baseMap} layerName="wf2020" show={showFireShapeLayer} />
        </>
      )}

      <div ref={baseMapEl} className={className} />
    </>
  );
};

export default Map;
