import { Form } from "antd";
import * as S from "./addTodo.style";
import useTodoList from "../custom/useTodoList";
import ListTodo from "../listTodo/listTodo";

export default function AddTodo() {
  // todoList의 기능을 모아놓은 커스텀 훅
  const { addTodo } = useTodoList();
  const [form] = Form.useForm();

  // any로 타입을 해놓지 않으면 이 타입은 unKnown 타입이라서 오류가 계속 나서 any로 사용함.
  const handleTodo = (values: any) => {
    addTodo(values.content);
    form.resetFields();
  };

  return (
    <S.Wrapper>
      <S.ListTitle>My Todo List</S.ListTitle>
      <S.FormWrap form={form} onFinish={handleTodo}>
        <Form.Item
          name="content"
          rules={[{ required: true, message: "할 일을 입력해주세요!" }]}
          style={{ width: "85%" }}
        >
          <S.InputToDo placeholder="할 일을 추가해보세요 !" />
        </Form.Item>
        <Form.Item>
          <S.AddBtn type="primary" htmlType="submit">
            할 일 추가
          </S.AddBtn>
        </Form.Item>
      </S.FormWrap>
      {/* 전체, 완료, 미완료 리스트 컴포넌트 */}
      <ListTodo />
    </S.Wrapper>
  );
}
