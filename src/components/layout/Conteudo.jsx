import Artigo from "../Artigo";

const Conteudo = () => {
  /*1. Crie uma array com o nome de três cursos
  2. Dentro das chamadas dos artigos, passe como uma nova prop
  chamada "curso" com o nome de cada curso */

  const cursos = ["mecânica", "história", "enfermagem"];

  return (
    <main>
      <section>
        <h2>Conteúdo do site....</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ab
          inventore, sapiente impedit numquam maxime quia voluptates, et at modi
          harum recusandae? Inventore illo consectetur, quisquam distinctio
          commodi voluptate fugit.
        </p>

        <Artigo
          titulo="Artigo 1"
          subtitulo="Subitítulo do artigo 1"
          curso={cursos[0]}
        >
          Este é o texto do primeiro artigo....
        </Artigo>
        <Artigo
          titulo="Artigo 2"
          subtitulo="Subitítulo do artigo 2"
          curso={cursos[1]}
        >
          Este é o texto do segundo artigo....
        </Artigo>
        <Artigo
          titulo="Artigo 3"
          subtitulo="Subitítulo do artigo 3"
          curso={cursos[2]}
        >
          Este é o texto do terceiro artigo....
        </Artigo>
      </section>
    </main>
  );
};

export default Conteudo;
