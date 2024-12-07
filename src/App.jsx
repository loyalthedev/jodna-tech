import { RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Routes from "../Routes";

function App() {
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  );
}

export default App;
