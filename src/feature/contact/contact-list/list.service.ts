import axios, { AxiosResponse } from "axios";
import { IContact } from "../models";

const baseUrl: string = "http://localhost:3300";

export const getContactList = (): Promise<IContact[]> => {
  return axios
    .get<IContact[]>(`${baseUrl}/contacts`)
    .then(({ data }: AxiosResponse<IContact[]>) => data);
};
