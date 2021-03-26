Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Mapboxgl = require('mapbox-gl');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Mapboxgl__default = /*#__PURE__*/_interopDefaultLegacy(Mapboxgl);

var useEffect = React.useEffect, useState = React.useState;
var SpreadLayer = function (_a) {
    var show = _a.show, layerName = _a.layerName, map = _a.map;
    var _b = useState(false), mapLoaded = _b[0], setMapLoaded = _b[1];
    function showLayer() {
        var layer = map.style.getLayer(layerName);
        if (layer) {
            map.setLayoutProperty(layerName, "visibility", "visible");
        }
    }
    function hideLayer() {
        var layer = map.style.getLayer(layerName);
        if (layer) {
            map.setLayoutProperty(layerName, "visibility", "none");
        }
    }
    useEffect(function () {
        if (show && mapLoaded)
            showLayer();
        if (!show && mapLoaded)
            hideLayer();
    }, [show]);
    useEffect(function () {
        if (map) {
            map.on("load", function () {
                setMapLoaded(true);
                if (show)
                    showLayer();
                if (!show)
                    hideLayer();
            });
        }
    }, [map]);
    return null;
};

Mapboxgl__default['default'].accessToken =
    "pk.eyJ1Ijoia2V0dGxla2V0dGxlIiwiYSI6ImNrbGxkZDR2ZDEwMDgycGx5cm83ejl5NWQifQ.Jc5tHw94MokeSr2jFqT4ow";
var useEffect$1 = React.useEffect, useRef = React.useRef;
var Map = function (_a) {
    var showSpreadLayer = _a.showSpreadLayer, showFireShapeLayer = _a.showFireShapeLayer, className = _a.className, settings = _a.settings;
    var _b = React.useState(null), baseMap = _b[0], setBaseMap = _b[1];
    var baseMapEl = useRef();
    var initializeMap = function () {
        if (baseMapEl) {
            var map = new Mapboxgl__default['default'].Map({
                container: baseMapEl.current,
                style: "mapbox://styles/kettlekettle/ckk79y38t06x617pg5v5z87rq",
                center: [settings.lon, settings.lat],
                zoom: settings.zoom,
                pitch: settings.pitch,
            });
            // disable map zoom when using scroll
            map.scrollZoom.disable();
            setBaseMap(map);
        }
    };
    useEffect$1(function () {
        if (baseMap) {
            baseMap.scrollZoom.setZoomRate(1 / 600); // PERFORMANCE: slow down zoom rate
            baseMap.addControl(new Mapboxgl__default['default'].NavigationControl(), "top-right");
        }
    }, [baseMap]);
    useEffect$1(function () {
        if (baseMapEl) {
            initializeMap();
        }
    }, [baseMapEl]);
    return (React.createElement(React.Fragment, null,
        baseMap && (React.createElement(React.Fragment, null,
            React.createElement(SpreadLayer, { map: baseMap, layerName: "spreadfeb21310", show: showSpreadLayer }),
            React.createElement(SpreadLayer, { map: baseMap, layerName: "wf2020", show: showFireShapeLayer }))),
        React.createElement("div", { ref: baseMapEl, className: className })));
};

var App = function (_a) {
    var _b = _a.showSpreadLayer, showSpreadLayer = _b === void 0 ? true : _b, _c = _a.showFireShapeLayer, showFireShapeLayer = _c === void 0 ? true : _c, _d = _a.className, className = _d === void 0 ? "" : _d, _e = _a.settings, settings = _e === void 0 ? {
        zoom: 5,
        lat: 37.942291,
        lon: -120.499532,
        pitch: 0,
    } : _e;
    return (React.createElement(Map, { className: className, showSpreadLayer: showSpreadLayer, showFireShapeLayer: showFireShapeLayer, settings: settings }));
};

exports.default = App;
//# sourceMappingURL=index.js.map
