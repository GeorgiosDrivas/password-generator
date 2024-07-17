import { Dispatch, SetStateAction } from "react";

export interface RandomChars {
  randomChars: string;
}

export interface State {
  setRandomChars: Dispatch<SetStateAction<string>>;
}