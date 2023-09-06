import { selector } from "recoil";
import { todoListState, todoSearchKeywordState } from "../atoms/todo";

// 検索後のTodoList
export const searchedTodoListState = selector({
  key: "searchedTodoListState",
  get: ({ get }) => {
    const regexp = new RegExp("^" + get(todoSearchKeywordState), "i");
    return get(todoListState).filter((todo) => todo.title.match(regexp));
  },
});
