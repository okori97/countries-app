export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: object;
  };
  capital: string;
  population: number;
  region: string;
  flags: {
    png: string;
    svg: string;
  };
  currencies: {
    name: string;
  };
  languages: string[];
  borders: string[];
  tld: string[];
  subregion: string;
}
