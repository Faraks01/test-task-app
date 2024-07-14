import {Character} from "@/entities/character/model";

export interface EditCharacterFormData extends Omit<
  Character,
  'id' |
  'homeworld' |
  'films' |
  'species' |
  'vehicles' |
  'starships' |
  'created' |
  'edited' |
  'url'
> {
}

export type EditCharacterFormActions = {
  [Key in keyof EditCharacterFormData as `on${Capitalize<Key>}InputChange`]: (value: EditCharacterFormData[Key]) => void;
}