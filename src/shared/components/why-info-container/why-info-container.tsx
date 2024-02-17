import { MouseEventHandler } from "react";
import ClearIcon from "@mui/icons-material/Clear";

export function WhyInfoContainer({ onClick }: { onClick: MouseEventHandler }) {
  return (
    <>
      <div className="rounded-md bg-white mb-48 p-2 bg-teal-400 grid grid-cols-3 gap-4 border-4 border-solid border-black">
        <div className="col-span-3 font-playfair font-black text-3xl flex items-center justify-between">
          Why you ask?
          <ClearIcon
            className="cursor-pointer"
            sx={{ fontSize: 30 }}
            onClick={onClick}
          />
        </div>
        <div className="row-span-2">
          <h3 className="font-playfair font-bold text-2xl">Dev</h3>
          <p className="font-lato"></p>
        </div>
        <div className="row-span-2">
          <h3 className="font-playfair font-bold text-2xl">Food</h3>
          <p className="font-lato">bingo bongo, what is that?</p>
        </div>
        <div className="row-span-2">
          <h3 className="font-playfair font-bold text-2xl">Travel</h3>
          <p className="font-lato">Lovely not, just kidding.</p>
        </div>
      </div>

      {/* <Button onClick={onClick}></Button> */}
    </>
  );
}
