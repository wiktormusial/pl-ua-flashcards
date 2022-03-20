interface Props {
  translation: boolean;
}

const WordBody: React.FC<Props> = ({ translation }) => {
  return (
    <section className="card__body">
      <p>
        {!translation
          ? 'zaimek zwrotny; *nieakcentowana forma celownika "se" potoczna, używana głównie w języku mówionym'
          : "Зворотний займенник; * ненаголошена давальна форма «се», розмовна, переважно вживається в розмовній мові"}
      </p>
      <p className="card__source">
        {!translation ? "Źródło:" : "Джерело:"}{" "}
        <a href="https://sjp.pl/się">https://sjp.pl/się</a>
      </p>
    </section>
  );
};

export default WordBody;
