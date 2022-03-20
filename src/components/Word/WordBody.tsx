interface Props {
  children: string;
}

const WordBody: React.FC<Props> = ({ children }) => {
  return (
    <section className="card__body">
      <p>{children}</p>
      <p className="card__source">
        Źródło: <a href="https://sjp.pl/się">https://sjp.pl/się</a>
      </p>
    </section>
  );
};

export default WordBody;
