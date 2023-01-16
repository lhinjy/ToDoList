import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
// import Recipes from "./components/Recipes";
import { ReactQueryConfigProvider } from "react-query";
const Recipes = lazy(() => import("./components/Recipes"));
const Recipe = lazy(() => import("./components/Recipe"));

const queryConfig = {
  suspense: true,
};
function App() {
  const [activeRecipe, setActiveRecipe] = useState(null);
  return (
    <div>
      <h1> React Query Recipes</h1>
      <ReactQueryConfigProvider config={queryConfig}>
        <Suspense fallback={<h2>Loading...</h2>}>
          {activeRecipe ? (
            <Recipe
              activeRecipe={activeRecipe}
              setActiveRecipe={setActiveRecipe}
            />
          ) : (
            <Recipes setActiveRecipe={setActiveRecipe} />
          )}
        </Suspense>
      </ReactQueryConfigProvider>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
