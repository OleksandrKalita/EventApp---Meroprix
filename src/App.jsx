import { RouterProvider } from "react-router-dom";
import { useBrowserRouter } from "./hooks/useBrowserRouter";

function App() {
  return (
    <RouterProvider router={useBrowserRouter()} />
  );
}

export default App;
