import { atom } from "recoil";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../../constants/data";

export const todoListState = atom({
  key: "todoListState",
  default: INIT_TODO_LIST,
});

export const todoUniqueIdState = atom({
  key: "todoUniqueIdState",
  default: INIT_UNIQUE_ID,
});

export const todoSearchKeywordState = atom({
  key: "todoSearchKeywordState",
  default: "",
});
