import { atom } from "recoil";

export const useRecoilTodo = atom({
  key: "useRecoilTodo",
  default: [
    {
      id: 1,
      content: "Racing car sprays burning fuel into crowd.",
      check: true,
    },
    {
      id: 2,
      content: "Australian walks 100km after outback crash.",
      check: false,
    },
    { id: 3, content: "Man charged over missing wedding girl.", check: false },
  ],
});
