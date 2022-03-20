interface Props {
  translation: boolean;
}

const WordFooter: React.FC<Props> = ({ translation }) => {
  return (
    <div>
      <p className="card__link">
        {!translation ? "Następne słowo" : "Наступне слово"}
      </p>
    </div>
  );
};
export default WordFooter;
