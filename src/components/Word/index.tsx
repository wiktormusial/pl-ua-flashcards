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
    fetchWords()
      .then((res) => {
        console.log(res);
        setWords(res);
        setWord(res[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (words) {
      setWord(words[wordIndex]);
      if (wordIndex === words.length) {
        setWordIndex(0);
      }
    }
  }, [wordIndex, words]);

  if (!word) {
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
        <WordHeader>{!translation ? word.word : word.word_ua}</WordHeader>
        <WordBody translation={translation} word={word} />
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
