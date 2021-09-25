import React, { useEffect } from "react";
import Graphic from "@arcgis/core/Graphic";

const MapGraphics = ({ view }) => {
  useEffect(() => {
    const graph = new Graphic({
      geometry: {
        type: "point",
        x: 35,
        y: 36,
      },
      symbol: {
        type: "simple-marker",
        color: "red",
        size: 35,
      },
    });

    view.graphics.add(graph);
  }, []);

  return null;
};

export default MapGraphics;
