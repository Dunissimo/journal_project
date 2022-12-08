import { Params } from "react-router-dom";

export interface ISubject {
  name: string;
  id: Readonly<Params<string>> | string;
}

export interface IUser {
  displayName: string;
  id: string | number;
}
