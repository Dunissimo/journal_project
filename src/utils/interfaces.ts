import { Params } from "react-router-dom";

export interface ISubject {
  name: string;
  id: Readonly<Params<string>> | string;
}
