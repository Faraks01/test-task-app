import {generatePath} from "react-router-dom";
import { ROUTE_CONSTANTS } from '@/shared/config';
import {Character} from "@/entities/character/model";

export const generateCharacterDetailsUrlPath = (id: Character['id']) => generatePath(
  ROUTE_CONSTANTS.CHARACTER_DETAILS,
  { id }
);