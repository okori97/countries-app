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

export interface getAllFunc {
  region?: string;
  name?: string;
}

export async function getAll({
  region,
  name,
}: getAllFunc): Promise<Country[] | undefined> {
  let url = "https://restcountries.com/v3.1";

  if (name) {
    url += `/name/${name}`;
  } else if (region) {
    url += `/region/${region}`;
  } else {
    url += "/all";
  }

  try {
    const response = await axios.get<Country[]>(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
