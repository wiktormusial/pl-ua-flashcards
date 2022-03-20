import { useState } from "react";
import { Switch } from "@mui/material";
import WordHeader from "./WordHeader";
import WordBody from "./WordBody";
import WordFooter from "./WordFooter";
import "./Word.css";

const Word = () => {
  const [translation, setTranslation] = useState(false);

  return (
    <div className="card">
      <div className="card__switch">
        <div className="flag">🇵🇱</div>
        <Switch
          onChange={() => setTranslation(!translation)}
          color={"primary"}
        />
        <div className="flag">🇺🇦</div>
      </div>
      <WordHeader>{!translation ? "się" : "себе"}</WordHeader>
      <WordBody translation={translation} />
      <WordFooter translation={translation} />
    </div>
  );
};

export default Word;
