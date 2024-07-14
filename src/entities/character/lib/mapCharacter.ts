import type { CharacterDTO } from '@/entities/character/api';
import type { Character } from '@/entities/character/model';
import { parseEntityIdFromUrl } from '@/shared/lib';

export const mapCharacter = ({
  birth_year,
  hair_color,
  eye_color,
  skin_color,
  url,
  created,
  edited,
  ...restDto
}: CharacterDTO): Character => ({
  ...restDto,
  url,
  id: Number(parseEntityIdFromUrl(url)),
  created: new Date(created),
  edited: new Date(edited),
  birthYear: birth_year,
  hairColor: hair_color,
  eyeColor: eye_color,
  skinColor: skin_color,
});
