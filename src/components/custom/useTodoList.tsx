import { useRecoilTodo } from "@/src/common/store/store";
import { Modal } from "antd";

import { useRecoilState } from "recoil";

// To-DO-List의 기능을 커스텀 훅으로 분리해 놓은것
export default function useTodoList() {
  // recoil state를 이용해서 state를 global로 분리시켜놓음
  const [_, setTodo] = useRecoilState(useRecoilTodo);

  // 할 일 추가하는 함수
  const addTodo = (content: string) => {
    try {
      // 데이터가 있으면 setTodo로 객체 상태를 변경
      setTodo((prev) => [
        // 기존(prev)에다가 기존 배열 개수의 +1 그리고 할 일 데이터, 체크 표시는 기본적으로 false
        ...prev,
        { id: prev.length + 1, content, check: false },
      ]);
      Modal.success({ content: "등록되었습니다!" });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  /** 할 일 삭제하는 함수  */
  const deleteTodo = (id: number) => {
    // 삭제 버튼이 클릭된 id값을 받아서 id값과 일치하지 않는 값만 filter해서 setTodo하기
    try {
      setTodo((prev) => prev.filter((todo) => todo.id !== id));
      Modal.success({ content: "삭제되었습니다!." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  /** 체크 박스 toggle 함수 */
  const toggleCheck = (id: number) => {
    /* 클릭한 박스의 id값을 받고 todo를 순회해서 id값과 일치하면 check의 상태를 변경
        id값이 일치하지 않을 때는 그냥 todo 그대로 반환 */
    setTodo((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, check: !todo.check } : todo
      )
    );
  };
  return { addTodo, deleteTodo, toggleCheck };
}
