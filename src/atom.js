import { atom, selector } from "recoil";

export const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: { isButtonClicked: false }, // default value (aka initial value)
});
