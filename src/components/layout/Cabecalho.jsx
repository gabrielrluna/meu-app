import { useState } from "react";
import Menu from "./Menu";

const Cabecalho = () => {
  const exemplo2 = () => {
    console.log("exemplo2");
  };
  // Aqui, definimos no useState um valor inicial (colocado entre os parênteses)
  const [titulo, setTitulo] = useState("Exemplo de State");

  const atualizaTitulo = () => {
    setTitulo("Opa! state do título foi alterado");
  };

  return (
    <header>
      <button onClick={() => console.log("exemplo1")}>Exemplo 1</button>
      <button onClick={exemplo2}>Exemplo 2</button>
      <hr />

      {/*Aqui, aplicamos a variável de state chamada título*/}
      <h1 onClick={atualizaTitulo}>{titulo}</h1>
      <Menu />
    </header>
  );
};

export default Cabecalho;
