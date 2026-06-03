import { useEffect, useState } from "react";

function TodoForm({ adicionarProduto, produtoEditando }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  useEffect(() => {
    if (produtoEditando) {
      setNome(produtoEditando.nome);
      setPreco(produtoEditando.preco);
    }
  }, [produtoEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !preco) return;

    adicionarProduto({
      nome,
      preco,
    });

    setNome("");
    setPreco("");
  };

  return (
    <form onSubmit={handleSubmit}>
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
        {produtoEditando ? "Atualizar" : "Cadastrar"}
      </button>
    </form>
  );
}

export default TodoForm;