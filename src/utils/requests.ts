import axios from "axios";

export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string;
  population: number;
  region: string;
  flags: {
    png: string;
    svg: string;
  };
}

export async function getAll(): Promise<Country[] | undefined> {
  const url = "https://restcountries.com/v3.1/all";

  try {
    const response = await axios.get<Country[]>(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
