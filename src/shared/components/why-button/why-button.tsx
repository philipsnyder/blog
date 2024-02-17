import Button from "@mui/material/Button";

export function WhyButton({ label }: { label: string }) {
  return (
    <>
      <Button
        sx={{
          border: 3,
          fontWeight: "900",
          fontSize: "28px",
          color: "black",
          backgroundColor: "white",
          marginBottom: 30,
          ":hover": {
            backgroundColor: "white",
          },
        }}
        variant="contained"
        href="#devBlogWhy"
      >
        {label}
      </Button>
    </>
  );
}
