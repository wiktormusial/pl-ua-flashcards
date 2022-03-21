export interface Words {
    word: string;
    word_ua: string;
    word_definition: string;
    word_definition_ua: string;
}
  
export interface WordsDict {
    [id: number]: Words;
}