import "./App.css";
// import TodoList from "./components/ToDoList";
import { lazy, Suspense } from "react";
import { useQuery, useQueryErrorResetBoundary } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import RefreshButton from "./components/RefreshButton";
import { Dna, ColorRing } from "react-loader-spinner";

const TodoList = lazy(() => import("./components/ToDoList"));

const Loading = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperClass="blocks-wrapper"
      wrapperStyle={{ position: "fixed", top: "50%", left: "50%" }}
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
    />
  );
};

const ErrorFallBack = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h1>An error has occured</h1>
      <RefreshButton onClick={resetErrorBoundary}>Try again</RefreshButton>
      <pre style={{ whitespace: "normal" }}>{error.message}</pre>
    </div>
  );
};
function App() {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <div>
      <ErrorBoundary onReset={reset} fallbackRender={ErrorFallBack}>
        <Suspense fallback={<Loading />}>
          <TodoList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
