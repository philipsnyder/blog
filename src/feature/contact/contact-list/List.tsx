import { useEffect, useState } from "react";
import * as listService from "./list.service";
import { IContact } from "../models";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function List() {
  const navigate = useNavigate();
  const [list, setList] = useState<IContact[]>([]);

  useEffect(() => {
    listService
      .getContactList()
      .then((listResponse: IContact[]) => setList(listResponse));
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {list.map((listItem: IContact) => {
          return (
            <Paper
              elevation={0}
              className="cursor-pointer"
              onClick={() => navigate(`detail/${listItem.id}`)}
            >
              <div className="header-container flex items-center m-4">
                <div className="bg-sky-200 rounded-full w-12 h-12 md:w-16 md:h-16 flex justify-center items-center text-base font-extrabold text-neutral-200 mr-2">
                  {`${listItem?.firstName.slice(
                    0,
                    1
                  )} ${listItem?.lastName.slice(0, 1)}`}
                </div>
                <p className="font-bold text-xl">{`${listItem?.firstName} ${listItem.lastName}`}</p>
              </div>
            </Paper>
          );
        })}
      </div>
    </>
  );
}
