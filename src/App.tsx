import { Outlet, useNavigate } from "react-router-dom";
import { Nav } from "./shared/components";
import { IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";

function App() {
  const navigate = useNavigate();

  function handleAddBlogClick(): void {
    navigate("/add-blog");
  }

  return (
    <>
      <Nav></Nav>
      <Outlet />
      <div
        className="h-20 w-20 rounded-full bg-blue-500 flex items-center justify-center fixed bottom-10 right-10"
        onClick={handleAddBlogClick}
      >
        <IconButton aria-label="add blog post button" size="large">
          <Add className="text-white" sx={{ fontSize: "3rem" }}></Add>
        </IconButton>
      </div>
    </>
  );
}

export default App;
