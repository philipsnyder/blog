import { Button, Collapse } from "@mui/material";
import { useState } from "react";
import { Nav } from "../../../shared/components/nav/nav";
import { WhyButton } from "../../../shared/components";

export default function HomeHeader() {
  const [showContainer, setShowContainer] = useState<boolean>(false);

  function handleDevBlogWhyClick() {
    setShowContainer(!showContainer);
  }

  return (
    <>
      <Nav></Nav>
      <div
        className="bg-[url('/public/burger.jpeg')] min-h-screen bg-fixed bg-top bg-no-repeat bg-cover relative opacity-75 flex items-end justify-center"
        aria-label="computer flying and eating a burger"
      >
        <div className="mb-72">
          <Collapse in={showContainer}>
            <div className="w-36 h-24 bg-white">Booty</div>
          </Collapse>
          {!showContainer && (
            <WhyButton
              label="Why the dev blog?"
              onClick={handleDevBlogWhyClick}
              onTouchEnd={handleDevBlogWhyClick}
            ></WhyButton>
          )}
        </div>
      </div>
    </>
  );
}
