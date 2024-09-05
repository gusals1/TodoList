import { List, Tabs } from "antd";
import useTodoList from "../custom/useTodoList";
import * as S from "./listTodo.style";
import { useRecoilState } from "recoil";
import { useRecoilTodo } from "@/src/common/store/store";

export default function ListTodo() {
  const { deleteTodo, toggleCheck } = useTodoList();
  const [todo] = useRecoilState(useRecoilTodo);

  // 완료된 todoList => true값만 filter
  const completedTodos = todo.filter((el) => el.check);
  // 미완료된 todoList => false값만 filter
  const incompleteTodos = todo.filter((el) => !el.check);
  // 3번이나 반복하게 되서 object로 만들어서 map으로 컴포넌트 반복함.
  const TodoList = [
    { key: "1", tab: "전체", source: todo },
    { key: "2", tab: "미완료", source: incompleteTodos },
    { key: "3", tab: "완료", source: completedTodos },
  ];
  return (
    <Tabs defaultActiveKey="1">
      {TodoList.map((el) => (
        <Tabs.TabPane tab={el.tab} key={el.key}>
          <List
            bordered
            size="large"
            dataSource={el.source}
            renderItem={(item) => (
              <List.Item>
                <S.Check
                  checked={item.check}
                  onChange={() => toggleCheck(item.id)}
                />
                <List.Item.Meta title={<a href="#">{item.content}</a>} />
                <S.DelBtn
                  type="primary"
                  danger
                  onClick={() => deleteTodo(item.id)}
                >
                  삭제
                </S.DelBtn>
              </List.Item>
            )}
          />
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
}
