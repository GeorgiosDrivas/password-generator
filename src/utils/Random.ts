import { upper, lower, num, special } from "../data/values";
import { State } from "../types/types";

export default function Random({setRandomChars}: State) {
  const randomCharsArray: (string | number)[] = [];
  for (let i = 0; i < 3; i++) {
    // Fill the array
    randomCharsArray.push(upper[Math.floor(Math.random() * upper.length)]);
    randomCharsArray.push(lower[Math.floor(Math.random() * lower.length)]);
    randomCharsArray.push(num[Math.floor(Math.random() * num.length)]);
    randomCharsArray.push(special[Math.floor(Math.random() * special.length)]);
  }
  setRandomChars(randomCharsArray.join(""));
}
