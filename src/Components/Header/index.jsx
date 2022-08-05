import todoLogo from "../../assets/todoLogo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { HeaderCustom } from "./styles";
import { FormCustom } from "./styles";
import { useState } from "react";

export function Header({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <>
      <HeaderCustom>
        <img src={todoLogo} alt="Logo" />

        <FormCustom onSubmit={handleSubmit}>
          <input
            placeholder="Adicione uma nova tarefa"
            onChange={onChangeTitle}
            value={title}
          />
          <button>
            Criar
            <AiOutlinePlusCircle size={20} />
          </button>
        </FormCustom>
      </HeaderCustom>
    </>
  );
}
