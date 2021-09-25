import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import { useEffect, useRef, useState } from "react";
import MapGraphics from "./MapGraphics";
import MapWidgets from "./MapWidgets";

const MyMap = () => {
  const mapRef = useRef(null);
  const [view, setView] = useState(null);

  useEffect(() => {
    new MapView({
      container: mapRef.current,
      map: new Map({
        basemap: "dark-gray",
      }),
      zoom: 3,
    }).when((view) => setView(view));
  }, []);

  return (
    <div ref={mapRef} style={{ height: "100vh", width: "100%" }}>
      {view && (
        <>
          <MapWidgets view={view} />
          <MapGraphics view={view} />
        </>
      )}
    </div>
  );
};

export default MyMap;
