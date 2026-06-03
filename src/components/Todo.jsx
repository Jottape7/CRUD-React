function Todo({ produto, editar, excluir }) {
  return (
    <div className="produto">
      <div>
        <h3>{produto.nome}</h3>
        <p>R$ {produto.preco}</p>
      </div>

      <div className="botoes">
        <button onClick={editar}>
          Editar
        </button>

        <button onClick={excluir}>
          Excluir
        </button>
      </div>
    </div>
  );
}

export default Todo;