import React, { useState, useEffect } from "react";

export const useFetch = (initUrl) => {
  const [url, setUrl] = useState(initUrl);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status !== 200) return "There must be a problem";
        return response.json();
      })
      .then((json) => setData(json));
  }, [url]);

  return [data, setUrl];
};
