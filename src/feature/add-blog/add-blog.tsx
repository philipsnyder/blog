import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  SyntheticEvent,
  useState,
} from "react";
import { IBlogPost } from "../../shared/models/blog-post.model";
import { Button, FormControl, OutlinedInput, TextField } from "@mui/material";
import { Textarea } from "@mui/joy";

export default function AddBlog() {
  const [formData, setFormData] = useState<IBlogPost>({
    _id: "",
    title: "",
    teaser: "",
    content: "",
    date_published: "",
  });

  const handleAddBlogSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
  };

  // find a way to typedef this
  const handleFormChange = (e: any) => {
    console.log("e.target: ", e.target);
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleAddBlogSubmit} className="mx-12">
        <div className="flex flex-col">
          <FormControl sx={{ width: "40%" }}>
            <TextField
              id="title"
              label="Blog title"
              variant="standard"
              name="title"
              autoFocus
              placeholder="Enter blog title"
            />
          </FormControl>
          <FormControl sx={{ marginTop: "2rem", width: "75%" }}>
            <Textarea
              variant="plain"
              placeholder="Enter blog body here or upload document"
            ></Textarea>
          </FormControl>
        </div>
        <Button sx={{ marginTop: "2rem" }} type="submit" variant="outlined">
          Add Blog
        </Button>
      </form>
    </>
  );
}
