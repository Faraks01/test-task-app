export interface Character {
  id: number;
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
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
  created: Date;
  edited: Date;
  /** Presented as URL */
  url: string;
}
