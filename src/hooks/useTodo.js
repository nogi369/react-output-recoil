import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  todoListState,
  todoUniqueIdState,
  todoSearchKeywordState,
} from "../store/atoms/todo";
import { searchedTodoListState } from "../store/selectors/todo";

export const useTodo = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  // 採番ID
  const [uniqueId, setUniqueId] = useRecoilState(todoUniqueIdState);
  // 検索キーワード
  const [searchKeyword, setSearchKeyword] = useRecoilState(
    todoSearchKeywordState,
  );
  // 入力値
  const [addInputValue, setAddInputValue] = useState("");
  // 表示用TodoList
  const showTodoList = useRecoilValue(searchedTodoListState);

  // 入力値の変更処理
  const onChangeAddInputValue = (e) => setAddInputValue(e.target.value);

  // 新規登録処理
  const handleAddTodo = (e) => {
    // EnterKeyを押された かつ 入力値が空文字でないこと
    if (e.key === "Enter" && addInputValue !== "") {
      // 新規作成するTodoの一意なid
      const nextUniqueId = uniqueId + 1;

      // 新規作成するTodoを含めた更新後のTodoList
      setTodoList([
        ...todoList,
        {
          id: nextUniqueId,
          title: addInputValue,
        },
      ]);

      setUniqueId(nextUniqueId);
      setAddInputValue("");
    }
  };

  const handleDeleteTodo = (targetId, targetTitle) => {
    // https://fuuno.net/nani/nani02/nani02.html
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
      setTodoList(todoList.filter((todo) => todo.id !== targetId));
    }
  };

  // 検索処理
  const handleChangeSearchKeyword = (e) => setSearchKeyword(e.target.value);

  const states = {
    showTodoList,
    addInputValue,
    searchKeyword,
  };

  const actions = {
    onChangeAddInputValue,
    handleAddTodo,
    handleDeleteTodo,
    handleChangeSearchKeyword,
  };

  return [states, actions];
};
