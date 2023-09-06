import { selector } from "recoil";
import { todoListState, todoListSearchKeywordState } from "../atom/todo";

// 検索後のTodoList
export const searchedTodoListState = selector({
  key: "searchedTodoListState",
  get: ({ get }) => {
    const regexp = new RegExp("^" + get(todoListSearchKeywordState), "i");
    return get(todoListState).filter((todo) => todo.title.match(regexp));
  },
});
