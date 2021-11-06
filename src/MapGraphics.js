import React, { useEffect } from "react";
import Graphic from "@arcgis/core/Graphic";

import Faker from "faker";

const MapGraphics = ({ view }) => {
  Faker.locale = "ar";

  let loactions = [];
  for (let index = 0; index < 10; index++) {
    loactions.push({
      name: Faker.name.findName(),
      address: Faker.address.streetAddress(),
      latitude: Faker.address.latitude(),
      longitude: Faker.address.longitude(),
    });
  }

  let loactions2 = [];
  for (let index = 0; index < 10; index++) {
    loactions2.push({
      name: Faker.name.findName(),
      address: Faker.address.streetAddress(),
      latitude: Faker.address.latitude(),
      longitude: Faker.address.longitude(),
    });
  }

  useEffect(() => {
    const glResult1 = view.map.findLayerById("glResult1");

    if (glResult1) {
      loactions.map((location) => {
        const graph = new Graphic({
          geometry: {
            type: "point",
            latitude: location.latitude,
            longitude: location.longitude,
          },
          symbol: {
            type: "simple-marker",
            color: "red",
            size: 14,
          },
          popupTemplate: {
            title: location.name,
            content: location.address,
          },
        });
        glResult1.add(graph);
      });
    }

    const glResult2 = view.map.findLayerById("glResult2");

    if (glResult2) {
      loactions2.map((location) => {
        const graph = new Graphic({
          geometry: {
            type: "point",
            latitude: location.latitude,
            longitude: location.longitude,
          },
          symbol: {
            type: "simple-marker",
            color: "blue",
            size: 20,
          },
          popupTemplate: {
            title: location.name,
            content: location.address,
          },
        });
        glResult2.add(graph);
      });
    }
  }, []);

  return null;
};

export default MapGraphics;
