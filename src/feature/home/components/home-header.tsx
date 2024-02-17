import { Button, Collapse } from "@mui/material";
import { useState } from "react";
import { Nav } from "../../../shared/components/nav/nav";
import { WhyButton, WhyInfoContainer } from "../../../shared/components";

export default function HomeHeader() {
  const [showContainer, setShowContainer] = useState<boolean>(false);

  function handleWhyBtnClick() {
    setShowContainer(!showContainer);
  }

  return (
    <>
      <div className="relative w-full">
        <div
          className="bg-[url('/public/burger.jpeg')] min-h-screen bg-fixed bg-top bg-no-repeat bg-cover opacity-75 flex justify-center items-end"
          aria-label="computer flying and eating a burger"
        >
          <div>
            {showContainer ? (
              <WhyInfoContainer onClick={handleWhyBtnClick}></WhyInfoContainer>
            ) : (
              <WhyButton
                label="Why the dev blog?"
                onClick={handleWhyBtnClick}
                onTouchEnd={handleWhyBtnClick}
              ></WhyButton>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
