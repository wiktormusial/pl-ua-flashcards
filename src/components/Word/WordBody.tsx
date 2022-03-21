import { Words } from "./types";

interface Props {
  translation: boolean;
  word: Words;
}

const WordBody: React.FC<Props> = ({ translation, word }) => {
  return (
    <section className="card__body">
      <p>{!translation ? word.word_definition : word.word_definition_ua}</p>
      <p className="card__source">
        {!translation ? "Źródło:" : "Джерело:"}
        <a href={`https://sjp.pl/${word.word}`}>https://sjp.pl/{word.word}</a>
      </p>
    </section>
  );
};

export default WordBody;
