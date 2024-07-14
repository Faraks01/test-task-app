export interface CharacterDTO {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  /** Presented as URL */
  homeworld: string;
  /** URL addresses list */
  films: string[];
  /** URL addresses list */
  species: string[];
  /** URL addresses list */
  vehicles: string[];
  /** URL addresses list */
  starships: string[];
  /** Date in ISO string */
  created: string;
  /** Date in ISO string */
  edited: string;
  /** Presented as URL */
  url: string;
}
