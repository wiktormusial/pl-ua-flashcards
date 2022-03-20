import WordHeader from "./WordHeader";
import WordBody from "./WordBody";
import "./Word.css";

const Word = () => {
  return (
    <div className="card">
      <WordHeader>się</WordHeader>
      <WordBody>
        zaimek zwrotny; *nieakcentowana forma celownika "se" potoczna, używana
        głównie w języku mówionym
      </WordBody>
    </div>
  );
};

export default Word;
