import React, { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

import Gif from "./Gif";

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keyword })
    .then((gifs) => setGifs(gifs));
  }, []);

  return gifs.map((singleGif) => (
    <Gif
      key={singleGif.id}
      title={singleGif.title}
      url={singleGif.url}
      id={singleGif.id}
    />
  ));
}
