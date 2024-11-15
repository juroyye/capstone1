import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
]);

function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
