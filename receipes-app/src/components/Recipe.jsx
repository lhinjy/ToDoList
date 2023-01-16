import React from "react";
import Button from "./Button";
import { Spinner } from "./Spinner";
import { fetchRecipe } from "../queries";
import { useQuery } from "react-query";
export default function Receipe({ activeRecipe, setActiveRecipe }) {
  const { data, isFetching } = useQuery(
    ["Receipe", { id: activeRecipe }],
    fetchRecipe
  );
  return (
    <div>
      <Button
        onClick={() => {
          setActiveRecipe(null);
        }}
      >
        Back
      </Button>
      <h2>
        ID: {activeRecipe} {isFetching ? <Spinner /> : null}
      </h2>
      {data ? (
        <div>
          <p>Title: {data.title}</p>
          <p>Content: {data.content}</p>
        </div>
      ) : null}
    </div>
  );
}
