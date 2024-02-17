import Button from "@mui/material/Button";
import { MouseEventHandler, TouchEventHandler } from "react";

export function WhyButton({
  label,
  onClick,
  onTouchEnd,
}: {
  label: string;
  onClick: MouseEventHandler;
  onTouchEnd: TouchEventHandler;
}) {
  return (
    <>
      <Button
        sx={{
          border: 3,
          // width: "24rem",
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
        onClick={onClick}
        onTouchEnd={onTouchEnd}
      >
        {label}
      </Button>
    </>
  );
}
