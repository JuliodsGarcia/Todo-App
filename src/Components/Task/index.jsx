import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { List, CheckContainer, Circle, ButtonDelete, CustomP } from "./style";
import styled from "styled-components";

export function Task({ task, onDelete, onCompleted }) {
  return (
    <List>
      <CheckContainer>
        <Circle type="checkbox" onClick={() => onCompleted(task.id)}>
          {task.isCompleted ? <BsFillCheckCircleFill /> : <Circle />}{" "}
        </Circle>
      </CheckContainer>

      <CustomP>{task.title}</CustomP>

      <ButtonDelete onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </ButtonDelete>
    </List>
  );
}
