import { useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [editando, setEditando] = useState(null);

  const salvarProduto = (e) => {
    e.preventDefault();

    if (!nome || !preco) return;

    if (editando !== null) {
      const listaAtualizada = produtos.map((produto, index) =>
        index === editando
          ? { nome, preco }
          : produto
      );

      setProdutos(listaAtualizada);
      setEditando(null);
    } else {
      setProdutos([...produtos, { nome, preco }]);
    }

    setNome("");
    setPreco("");
  };

  const editarProduto = (index) => {
    setNome(produtos[index].nome);
    setPreco(produtos[index].preco);
    setEditando(index);
  };

  const excluirProduto = (index) => {
    const novaLista = produtos.filter((_, i) => i !== index);
    setProdutos(novaLista);
  };

  return (
    <div className="container">
      <h1>Cadastro de Produtos</h1>
      <form onSubmit={salvarProduto}>
        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        <button type="submit">
          {editando !== null ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
      <div className="lista">
        {produtos.map((produto, index) => (
          <div className="produto" key={index}>
            <div>
              <h3>{produto.nome}</h3>
              <p>R$ {produto.preco}</p>
            </div>
            <div className="botoes">
              <button onClick={() => editarProduto(index)}>
                Editar
              </button>
              <button onClick={() => excluirProduto(index)}>
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;