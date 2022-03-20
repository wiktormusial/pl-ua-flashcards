interface Props {
  children: string;
}

const WordBody: React.FC<Props> = ({ children }) => {
  return <p className="card__body">{children}</p>;
};

export default WordBody;
