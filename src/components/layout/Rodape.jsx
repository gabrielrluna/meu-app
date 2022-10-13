import { useState } from "react";

const Rodape = () => {
  const estilosInicias = {
    textAlign: "center",
    textTransform: "uppercase",
    border: "solid 2px red",
  };

  const [estilos, setEstilos] = useState(estilosInicias);

  const esconder = () => setEstilos({ display: "none" });
  const exibir = () => setEstilos(estilosInicias);

  return (
    <>
      <p>
        <span onMouseOver={esconder}>Esconder</span> |
        <span onMouseOver={exibir}>Exibir</span>
      </p>
      <footer style={estilos}>
        <p>Rodapé</p>
      </footer>
    </>
  );
};

export default Rodape;
