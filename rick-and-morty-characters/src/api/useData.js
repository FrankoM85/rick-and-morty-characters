import React, { useEffect } from "react";
import { useFetch } from "./useFetch.js";
import { mainUrls } from "./dataRoutes.js";

export const useCharacters = (pageNum = 1) => {
  const [characters, setUrl] = useFetch(mainUrls.characters + pageNum);
  useEffect(() => {
    setUrl(mainUrls.characters + pageNum);
  }, [pageNum]);
  return characters === undefined ? "Loading..." : characters;
};

export const useLocations = (pageNum = 1) => {
  const [locations, setUrl] = useFetch(mainUrls.locations + pageNum);
  useEffect(() => {
    setUrl(mainUrls.locations + pageNum);
  }, [pageNum]);
  return locations === undefined ? "Loading..." : locations;
};
