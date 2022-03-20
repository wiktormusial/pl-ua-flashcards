interface Props {
  children: string;
}

const WordHeader: React.FC<Props> = ({ children }) => {
  return <h1 className="card__heading">{children}</h1>;
};

export default WordHeader;
