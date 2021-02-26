import * as React from "react";
import { MapSettings } from "../types";
declare const Map: React.FC<{
    showSpreadLayer: boolean;
    showFireShapeLayer: boolean;
    className: string;
    settings: MapSettings;
}>;
export default Map;
