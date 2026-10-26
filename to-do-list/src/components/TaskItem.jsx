function TaskItem({ tarefa, onConcluir, onApagar }) {
  return (
    <li className={tarefa.isCompleted ? "concluida" : ""}>
      <div className="tarefa-info">
        <p className="tarefa-texto">{tarefa.text}</p>
        <p className="tarefa-status">
          {tarefa.isCompleted ? "Completa" : "Não Completa"}
        </p>
      </div>

      <div className="tarefa-acoes">
        <button type="button" onClick={() => onConcluir(tarefa.id)}>
          {tarefa.isCompleted ? "Reabrir" : "Concluir"}
        </button>

        <button
          className="botao-apagar"
          type="button"
          onClick={() => onApagar(tarefa.id)}
        >
          Apagar
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
