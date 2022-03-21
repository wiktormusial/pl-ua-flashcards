export interface Words {
    word: string;
    word_ua: string;
    definition: string;
    definition_ua: string;
}
  
export interface WordsDict {
    [id: number]: Words;
}