import { useEffect, useState } from "react";
import axios from "axios";
import { Switch } from "@mui/material";
import { Words } from "./types";
import WordHeader from "./WordHeader";
import WordBody from "./WordBody";
import WordFooter from "./WordFooter";
import "./Word.css";

const fetchWords = async () => {
  const response = await axios.get<Words[]>(
    "http://localhost:8000/api/v1/getwords/"
  );
  return response.data;
};

const Word = () => {
  const [translation, setTranslation] = useState(false);
  const [words, setWords] = useState<Words[]>();

  useEffect(() => {
    fetchWords()
      .then((res) => setWords(res))
      .catch((err) => console.error(err));
  }, []);

  if (!words) {
    return <div>Loading</div>;
  } else {
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
  }
};

export default Word;
