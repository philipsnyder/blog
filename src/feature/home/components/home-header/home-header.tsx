import Button from "@mui/material/Button";
import { WhyButton } from "../../../../shared/components";

export default function HomeHeader() {
  // const [showContainer, setShowContainer] = useState<boolean>(false);

  // function handleWhyBtnClick() {
  //   setShowContainer(!showContainer);
  // }

  return (
    <>
      <div className="relative w-full">
        <div
          className="bg-[url('/public/burger.jpeg')] min-h-screen bg-fixed bg-top bg-no-repeat bg-cover opacity-75 flex justify-center items-end"
          aria-label="computer flying and eating a burger"
        >
          <div>
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
              href="#whySite"
            >
              What is this place?
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
