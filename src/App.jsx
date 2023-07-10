import ErrorBoundary from "./components/ErrorBoundary";
import ProductEx from "./components/ProductEx";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <ProductEx product="orange" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ProductEx product="banana" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ProductEx product="apple" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
