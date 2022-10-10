import Menu from "./Menu";

const estilos = {
  color: "white",
  backgroundColor: "black",
};

const Cabecalho = () => {
  return (
    <header style={{ backgroundColor: "lightblue", textAlign: "center" }}>
      <h1 style={estilos}>Interface React</h1>
      <Menu />
    </header>
  );
};

export default Cabecalho;
