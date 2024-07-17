import { RandomChars } from "../types/types";

export default function copyToClipboard({ randomChars }: RandomChars) {
  const textArea = document.createElement("textarea");
  textArea.value = randomChars;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}