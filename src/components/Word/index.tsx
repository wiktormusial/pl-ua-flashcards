import WordHeader from "./WordHeader";
import WordBody from "./WordBody";
import WordFooter from "./WordFooter";
import "./Word.css";

const Word = () => {
  return (
    <div className="card">
      <WordHeader>się</WordHeader>
      <WordBody>
        zaimek zwrotny; *nieakcentowana forma celownika "se" potoczna, używana
        głównie w języku mówionym
      </WordBody>
      <WordFooter />
    </div>
  );
};

export default Word;
