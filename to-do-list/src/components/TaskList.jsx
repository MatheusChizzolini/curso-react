import TaskItem from "./TaskItem";

function TaskList({ tarefas, onConcluir, onApagar }) {
  return (
    <>
      {tarefas.length === 0 && (
        <p className="mensagem-vazia">Nenhuma tarefa encontrada.</p>
      )}

      <ul className="lista-tarefas">
        {tarefas.map((tarefa) => (
          <TaskItem
            key={tarefa.id}
            tarefa={tarefa}
            onConcluir={onConcluir}
            onApagar={onApagar}
          />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
