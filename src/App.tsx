import { Outlet } from "react-router-dom";
import { Nav } from "./shared/components";

function App() {
  return (
    <>
      <Nav></Nav>
      <Outlet />
    </>
  );
}

export default App;
