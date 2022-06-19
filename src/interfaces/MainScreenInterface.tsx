export interface ChuckNorrisJoke {
  categories: string[] | string;
  id: number;
  joke: string;
}

export interface ResponseJokeResult {
  status: number;
  value: ChuckNorrisJoke;
}
export interface ResponseMultiJokeResult {
  status: number;
  value: ChuckNorrisJoke[];
}

export interface Categories {
  value: string[];
}

export interface ResponseCategoriesResult {
  status: number;
  value: string[];
}
