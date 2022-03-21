interface Props {
  translation: boolean;
  wordIndex: number;
  setWordIndex: React.Dispatch<React.SetStateAction<number>>;
}

const WordFooter: React.FC<Props> = ({
  translation,
  wordIndex,
  setWordIndex,
}) => {
  return (
    <div className="card__foter">
      <p className="card__link" onClick={() => setWordIndex(wordIndex + 1)}>
        {!translation ? "Następne słowo" : "Наступне слово"}
      </p>
    </div>
  );
};
export default WordFooter;
