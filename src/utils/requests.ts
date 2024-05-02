import axios from "axios";
import type { Country } from "../types";

export interface getAllFunc {
  region?: string;
  name?: string | undefined;
  fullName?: boolean;
}

export async function getAll({
  region,
  name,
  fullName = false,
}: getAllFunc): Promise<Country[] | undefined> {
  let url = "https://restcountries.com/v3.1";

  if (name) {
    url += `/name/${name}`;
    if (fullName) {
      url += "?fullText=true";
    }
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
