const Artigo = (props) => {
  return (
    <article>
      <h3>{props.titulo}</h3>
      <h4>{props.subtitulo}</h4>
      <h4>Curso: {props.curso}</h4>
      <p> {props.children} </p>
    </article>
  );
};

export default Artigo;

// Versão Desestruturada (destructure)

/*const Artigo = ({titulo, subtitulo, curso, children}) => {
  return (
    <article>
      <h3>{titulo}</h3>
      <h4>{subtitulo}</h4>
      <h4>Curso: {curso}</h4>
      <p> {children} </p>
    </article>
  );
};

export default Artigo;*/
