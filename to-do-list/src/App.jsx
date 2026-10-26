import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskFilters from "./components/TaskFilters";
import TaskList from "./components/TaskList";

function App() {
  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("todas");

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const tarefasPorStatus = tarefas.filter((tarefa) => {
    if (filtro === "concluidas") {
      return tarefa.isCompleted;
    }

    if (filtro === "pendentes") {
      return !tarefa.isCompleted;
    }

    return true;
  });

  const tarefasFiltradas = tarefasPorStatus.filter((tarefa) => {
    return tarefa.text.toLowerCase().includes(busca.trim().toLowerCase());
  });

  function adicionarTarefa(texto) {
    const novaTarefa = {
      id: Date.now(),
      text: texto.trim(),
      isCompleted: false,
    };

    setTarefas([...tarefas, novaTarefa]);
  }

  function concluirTarefa(id) {
    const tarefasAtualizadas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return {
          ...tarefa,
          isCompleted: !tarefa.isCompleted,
        };
      }

      return tarefa;
    });

    setTarefas(tarefasAtualizadas);
  }

  function apagarTarefa(id) {
    const tarefasAtualizadas = tarefas.filter((tarefa) => {
      return tarefa.id !== id;
    });

    setTarefas(tarefasAtualizadas);
  }

  return (
    <main className="card">
      <h1>Gerenciador de Tarefas</h1>

      <TaskForm onAdicionar={adicionarTarefa} />

      <TaskFilters
        busca={busca}
        onBuscaChange={setBusca}
        filtro={filtro}
        onFiltroChange={setFiltro}
      />

      <TaskList
        tarefas={tarefasFiltradas}
        onConcluir={concluirTarefa}
        onApagar={apagarTarefa}
      />
    </main>
  );
}

export default App;
