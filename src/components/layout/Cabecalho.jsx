import Menu from "./Menu";
import Button from "react-bootstrap/Button";

const Cabecalho = () => {
  return (
    <>
      <Button variant="danger">Teste</Button>

      <header>
        <h1>Interface React</h1>
        <Menu />
      </header>
    </>
  );
};

export default Cabecalho;
