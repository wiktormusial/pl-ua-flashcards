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
  const [word, setWord] = useState<Words>();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (wordIndex === 0) {
      fetchWords()
        .then((res) => {
          console.log(res);
          setWords(res);
        })
        .catch((err) => console.error(err));
    }

    if (words) {
      setWord(words[wordIndex]);
      if (wordIndex === words.length) {
        console.log("komplet");
        setWordIndex(0);
      }
    }
  }, [wordIndex]);

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
        <WordFooter
          translation={translation}
          wordIndex={wordIndex}
          setWordIndex={setWordIndex}
        />
      </div>
    );
  }
};

export default Word;
