import {
  SectionCustom,
  List,
  PTarefasConcluidas,
  PConcluidos,
  Empty,
} from "./style";
import { Task } from "../Task";
import { TbClipboardText } from "react-icons/tb";

export function Tasks({ tasks, onDelete, onCompleted }) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <SectionCustom>
      <header>
        <div>
          <PTarefasConcluidas>Tarefas criadas</PTarefasConcluidas>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <PConcluidos className="pCustom">Concluídas</PConcluidos>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>

      <List>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onCompleted={onCompleted}
          />
        ))}

        {tasks.length <= 0 && (
          <Empty>
            <TbClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas </p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </Empty>
        )}
      </List>
    </SectionCustom>
  );
}
