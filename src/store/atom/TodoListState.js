import { atom } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [
    {
      id: 1,
      title: "Todo1",
    },
    {
      id: 2,
      title: "Todo2",
    },
  ],
});
