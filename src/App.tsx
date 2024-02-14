import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="m-8">
        <Outlet />
      </div>
    </>
  );
}

export default App;
