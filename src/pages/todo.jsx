import { RecoilRoot } from "recoil";
import { TodoTemplate } from "../components/templates/TodoTemplate";

export const TodoPage = () => {
  return (
    <RecoilRoot>
      <TodoTemplate />
    </RecoilRoot>
  )
}