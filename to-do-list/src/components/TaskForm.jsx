import { useState } from "react";

function TaskForm({ onAdicionar }) {
  const [texto, setTexto] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (texto.trim() === "") return;

    onAdicionar(texto);
    setTexto("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="texto">Insira uma nova tarefa</label>

      <div className="nova-tarefa">
        <input
          id="texto"
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />

        <button type="submit">Adicionar</button>
      </div>
    </form>
  );
}

export default TaskForm;
