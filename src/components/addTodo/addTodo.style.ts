import styled from "@emotion/styled";
import { Button, Checkbox, Form, Input } from "antd";

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 700px;
  padding: 60px 40px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px dashed #000;
  transform: translate(-50%, -50%);
  background: #f8f8f8;
`;

export const ListTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const FormWrap = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputToDo = styled(Input)`
  width: 100%;
  height: 45px;
`;

export const AddBtn = styled(Button)`
  font-size: 14px;
  height: 45px;
  font-weight: bold;
`;
