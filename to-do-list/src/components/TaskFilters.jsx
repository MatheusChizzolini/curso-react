function TaskFilters({ busca, onBuscaChange, filtro, onFiltroChange }) {
  return (
    <div className="filtros">
      <div>
        <label htmlFor="busca">Buscar tarefas</label>
        <input
          id="busca"
          type="search"
          value={busca}
          onChange={(e) => onBuscaChange(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="filtro">Filtrar por status</label>
        <select
          id="filtro"
          value={filtro}
          onChange={(e) => onFiltroChange(e.target.value)}
        >
          <option value="todas">Todas</option>
          <option value="pendentes">Pendentes</option>
          <option value="concluidas">Concluídas</option>
        </select>
      </div>
    </div>
  );
}

export default TaskFilters;
