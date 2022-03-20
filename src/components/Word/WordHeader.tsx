import { GiSpeaker } from "react-icons/gi";

interface Props {
  children: string;
}

const WordHeader: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="card__heading">
      <GiSpeaker className="card__icon" />
      <div>{children}</div>
    </h1>
  );
};

export default WordHeader;
