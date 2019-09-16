import React, { useState, useEffect } from "react";
import PokemanList from "./Components/PokemanList";
import axios from "axios";
import { awaitExpression } from "@babel/types";
import Pagination from "./Components/Pagination";

const App: React.FC = () => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageURL, setCurrentPageURL] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageURL, setNextPageURL] = useState();
  const [previousPageURL, setPreviousPageURL] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    let cancel:any;
    axios
      .get(currentPageURL, {
        cancelToken: new axios.CancelToken(c => (cancel = c))
      })
      .then(resp => {
        setIsLoading(false);
        setPokemon(resp.data.results.map((pk: any) => pk.name));
        setNextPageURL(resp.data.next);
        setPreviousPageURL(resp.data.previous);
      });
    return () => cancel();
  }, [currentPageURL]);

  function goBack() {
    setCurrentPageURL(previousPageURL);
  }

  function goNext() {
    setCurrentPageURL(nextPageURL);
  }

  if (isLoading) {
    return <div>Laoding...</div>;
  }

  return (
    <div>
      <PokemanList pokemanList={pokemon}></PokemanList>
      <Pagination
        previousLink={goBack}
        nextLink={goNext}
        previousURL={previousPageURL}
        nextPageURL={nextPageURL}
      ></Pagination>
    </div>
  );
};

export default App;
